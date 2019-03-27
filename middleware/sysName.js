import sysDic from '../untils/sysDic';

export default function ({ store, route }) {
    store.commit('UPDATE_STATE', { sysName: sysDic[route.name] });
}