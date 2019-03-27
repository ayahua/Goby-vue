export default async ({ app, store, req }) => {
    const menus =
        await app.$axios.get(
            `${store.state.oldModePath.host}/member/authority/userMenus.do`,
            {
                headers: {
                    Cookie: req.headers.cookie
                }
            }
        );
    store.commit('UPDATE_STATE', { menus: menus.data.entry.menuDTOS, cookie: req.headers.cookie });
};