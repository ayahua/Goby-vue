import { domains } from '../untils';

export default async ({ store, route }) => {
    const mod = route.name === 'login' ? 'custom' : route.name;
    const env = process.env.build_env;
    const runDir = process.env.build_dir ? process.env.build_dir.split('views')[1].split('.js')[0].toLowerCase() : '';
    if (mod !== 'index') {
        const currentDomains = domains[mod][env === 'dev' && (route.path).toLowerCase().indexOf(runDir) === -1 ? 'daily' : env];
        store.commit('UPDATE_STATE', { oldModePath: {
            ...currentDomains,
            timeHash: process.env.timeHash,
            env,
            runDir
        } });
    } else {
        store.commit('UPDATE_STATE', { oldModePath: {
            ...domains['sh-crm'][env === 'dev' && (route.path).toLowerCase().indexOf(runDir) === -1 ? 'daily' : env]
        } });
    }
};