export const state = () => ({
  sysName: '基础配置',
  menus: [],
  oldModePath: {},
  userInfo: {},
  cookie: undefined,
});

export const mutations = {
  UPDATE_STATE(states, query) {
    Object.keys(query).forEach((key) => {
      states[key] = query[key];
    });
  }
};
