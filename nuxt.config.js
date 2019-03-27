const path = require('path');
const pkg = require('./package');


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/global.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/loading', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config) {
      config.resolve.alias['jl-components'] = path.resolve(__dirname, './components');
      config.resolve.alias['jl-apis'] = path.resolve(__dirname, './apis');
      config.output.jsonpFunction = 'webpackNodeJsonP';
      return config;
    }
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'sh-crm',
        path: '/page/sh-crm/*',
        component: resolve(__dirname, 'pages/oldPage.vue')
      }, {
        name: 'zmc-crm',
        path: '/page/zmc-crm/*',
        component: resolve(__dirname, 'pages/oldPage.vue')
      }, {
        name: 'login',
        path: '/page/login',
        component: resolve(__dirname, 'pages/login.vue')
      }, {
        name: 'index',
        path: '/page/index.html',
        component: resolve(__dirname, 'pages/index.vue')
      }, {
        name: 'custom',
        path: '/page/*',
        component: resolve(__dirname, 'pages/oldPage.vue')
      });
    }
  }
};
