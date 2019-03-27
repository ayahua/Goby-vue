export default async ({ app, store, req, redirect }) => {
    if (!req.headers.cookie && req.path !== '/page/login') {
        return redirect('/page/login');
    } else if (req.headers.cookie) {
        const userInfo =
        await app.$axios.get(
            `${store.state.oldModePath.host}/member/member/getUserByUserId.do`,
            {
                headers: {
                    Cookie: req.headers.cookie
                }
            }
        );
        if (userInfo.data.message === '用户未登录' && req.path !== '/page/login') {
            return redirect('/page/login');
        } else if (userInfo.data.message !== '用户未登录' && req.path === '/page/login') {
            store.commit('UPDATE_STATE', { userInfo: userInfo.data.entry });
            return redirect('/');
        }
        store.commit('UPDATE_STATE', { userInfo: userInfo.data.entry });
    }
};