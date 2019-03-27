<template>
  <div class="sidebar">
    <a-menu
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      :defaultSelectedKeys="defaultSelectedKeys"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      @click="clickItem"
    >
        <a-sub-menu  v-for="menu in menus" :key="menu.name" >
            <span slot="title"><span>{{menu.name}}</span></span>
            <a-menu-item v-for="sMenu in menu.child"  :key="sMenu.url">
                <a :href="'/page'+sMenu.url">{{sMenu.name}}</a>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
    data(){
        const menus = this.$store.state.menus;
        const currentPath = this.$route.path.split('page')[1];
        const defaultSelectedKeys = currentPath ? [currentPath] : [];
        const openKeys = this.findSubMenu(menus,currentPath);
        const rootSubmenuKeys = menus.map(e => e.name);
        return {menus,collapsed:false, defaultSelectedKeys,openKeys,rootSubmenuKeys};
    },
    beforeCreate(){
        // const ele = this.el;
        // console.log('beforeCreate',ele);
    },
    beforeMount(){
        // this.$el.scrollTop = localStorage.getItem('scrollTop');
    },
    mounted(){
        // console.log(this);
    },
    methods:{
        findSubMenu(menus,menuUrl){
            let openSubMenus = [];
            const current = menus.find(menu => menu.url === menuUrl);
            if(current){
                openSubMenus.push(current.name);
            }else{
                menus.forEach(menu => {
                    if(menu.child && menu.child.length){
                        const childMenuHas = this.findSubMenu(menu.child,menuUrl);
                        childMenuHas.length && (openSubMenus = [menu.name,...childMenuHas]);
                    }
                })
            }
            return openSubMenus;
        },
        onOpenChange (openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        },
        clickItem(){
            localStorage.setItem('scrollTop',this.$el.scrollTop);
        }
    }
}
</script>


<style <style lang="less" scoped>
    .sidebar{
        background-color: #001529;
        width: 180px;
        position: fixed;
        top: 60px;
        bottom:0px;
        overflow-y: auto;     
    }
</style>