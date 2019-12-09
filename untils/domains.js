const domainsSH = {
  // test
  dev: {
    host: 'http://localhost:8083',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  daily: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  gray: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  online: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
};

const domainsZMC = {
  // test
  dev: {
    host: 'http://localhost:8083',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  daily: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  gray: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
  online: {
    host: 'http://xxx.com',
    domain: 'http://dev.xxx.ai/api',
    assetsPublicPath: 'http://xxx.com/crm/api',
  },
};

const domainsHYK = {
dev: {
  host: 'http://localhost:8083',
  domain: 'http://dev.xxx.ai/api',
  assetsPublicPath: 'http://xxx.com/crm/api',
},
daily: {
  host: 'http://xxx.com',
  domain: 'http://dev.xxx.ai/api',
  assetsPublicPath: 'http://xxx.com/crm/api',
},
gray: {
  host: 'http://xxx.com',
  domain: 'http://dev.xxx.ai/api',
  assetsPublicPath: 'http://xxx.com/crm/api',
},
online: {
  host: 'http://xxx.com',
  domain: 'http://dev.xxx.ai/api',
  assetsPublicPath: 'http://xxx.com/crm/api',
},
};

export default { 'sh-crm': domainsSH, 'zmc-crm': domainsZMC, 'custom': domainsHYK };
