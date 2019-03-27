const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = express();

// Import and Set Nuxt.js options
const domains = require('../untils/serverDomain');
const config = require('../nuxt.config.js');

config.dev = !(process.env.NODE_ENV === 'production');

const argv = JSON.parse(process.env.npm_config_argv);
process.env.build_env = argv.remain[0] || 'daily';
process.env.build_dir = argv.remain[1] || '';
process.env.timeHash = new Date().getTime();
const devProxy = {
  '/fonts': {
    target: 'http://localhost:8083/',
    changeOrigin: true,
  },
  '/api': {
    target: domains[process.env.build_env].domain,
    changeOrigin: true,
  }
};

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  if (config.dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(context => {
      app.use(proxyMiddleware(context, devProxy[context]));
    });
    app.use(proxyMiddleware(pathname => pathname.match(/^\/__webpack_hmr$/), {
      target: 'http://localhost:8083/',
      changeOrigin: true,
    }));
  }
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
