const domainsSH = {
  // test
  dev: {
    host: 'http://localhost:8083',
    domain: 'http://dev.webuy.ai/api/sh',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/blueHorse_branch/dev/build',
  },
  daily: {
    host: 'http://daily.qundian.elephtribe.com',
    domain: 'http://daily.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/sh-crm_branch/daily/build',
  },
  gray: {
    host: 'http://gray.qundian.elephtribe.com',
    domain: 'http://gray.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/sh-crm_branch/gray/build',
  },
  online: {
    host: 'http://qundian.elephtribe.com',
    domain: 'http://qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdn.elephtribe.com/crm/sh-crm/build',
  },
};

const domainsZMC = {
  // test
  dev: {
    host: 'http://localhost:8083',
    domain: 'http://dev.webuy.ai/api/sh',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/blueHorse_branch/dev/build',
  },
  daily: {
    host: 'http://daily.qundian.elephtribe.com',
    domain: 'http://daily.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/zmc-crm_branch/daily/build',
  },
  gray: {
    host: 'http://gray.qundian.elephtribe.com',
    domain: 'http://gray.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/zmc-crm_branch/gray/build',
  },
  online: {
    host: 'http://qundian.elephtribe.com',
    domain: 'http://qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdn.elephtribe.com/crm/zmc-crm/build',
  },
};

const domainsHYK = {
  dev: {
    host: 'http://localhost:8083',
    domain: 'http://dev.webuy.ai/api/hyk',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/blueHorse_branch/dev/build',
},
daily: {
    host: 'http://daily.qundian.elephtribe.com',
    domain: 'http://daily.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/blueHorse_branch/daily/build',
},
gray: {
    host: 'http://gray.qundian.elephtribe.com',
    domain: 'http://gray.qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdndaily.elephtribe.com/crm/blueHorse_branch/gray/build',
},
online: {
    host: 'http://qundian.elephtribe.com',
    domain: 'http://qundian.elephtribe.com/api',
    assetsPublicPath: 'http://cdn.elephtribe.com/crm/blueHorse/current/build',
},
};

export default { 'sh-crm': domainsSH, 'zmc-crm': domainsZMC, 'custom': domainsHYK };
