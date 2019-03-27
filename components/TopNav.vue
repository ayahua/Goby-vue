<template>
  <header class="top-nav">
    <div class="top-logo">工作台·{{sysName}}</div>
    <a-dropdown overlayClassName="userMenuDrop">
        <div class="userMenuButton">
            <span>{{userInfo.userNick}}</span>
            <a-icon class='user-icon' type="user" v-if="!userInfo.headPicture" />
            <img v-else :src="userInfo.headPicture" :alt="userInfo.userNick" />
          </div>
        <a-menu slot="overlay">
            <a-menu-item>
                <a @click="logout">退出登录</a>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
  </header>
</template>

<script>
export default {
    data(){
        const {sysName,userInfo} = this.$store.state
        return {sysName, userInfo};
    },
    methods:{
        async logout(){
            const data = await this.$axios.get(
                `/api/member/logout.do`,
                {
                headers:{
                    Authorization:this.$store.state.cookie
                }
            });
            data.data.status && (location.href = '/page/login');
        }
    }
}
</script>


<style <style lang="less" scoped>
    .top-nav{
        background-color:#001529;
        color:#fff;
        display:flex;
        height:60px;
        align-items: center;
        z-index: 1;
        box-shadow: 0px 0px 5px 0px #333;
        position: fixed;
        right: 0;
        left: 0;
        justify-content: space-between;
        .top-logo{
            width: 180px;
            text-align: center;
            font-size: 20px;
        }
        .userMenuButton{
            cursor: default;
            display: flex;
            align-items: center;
            padding:0 20px;
            img{
              width: 38px;
              border: 3px solid;
              height: 38px;
              border-radius: 20px;
              margin-left: 10px;
            }
            .user-icon{
              font-size: 20px;
              border: 2px solid;
              border-radius: 20px;
              margin-left: 10px; 
              padding: 5px;
            }
        }
    }
</style>