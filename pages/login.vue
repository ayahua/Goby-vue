<template>
  <section class="login-page">
    <div id="app"></div>
  </section>
</template>

<script>
import domains from '../untils/domains';

export default {
  layout:'login',
  head(){ 
    const {host, assetsPublicPath,env, timeHash, runDir} = this.$store.state.oldModePath;
    const {path} = this.$route;
    const script = [], link = [];
    if(env === 'dev' && path.toLowerCase().indexOf(runDir) > -1){
      script.push({ src: `${host}/${this.$route.params.pathMatch.split('.html')[0]}.js`,defer:'defer' })
    }else{
      script.push(
        { src: `${assetsPublicPath}/manifest.js?time=${timeHash}`,defer:'defer' },
        { src: `${assetsPublicPath}/vendor.js?time=${timeHash}`,defer:'defer' },
        { src: `${assetsPublicPath}/user/login.js?time=${timeHash}`,defer:'defer' }
      );
      link.push(
         { rel: 'stylesheet', href: `${host}/member/static/common.css` },
        { rel: 'stylesheet', href: `${assetsPublicPath}/vendor.css?time=${timeHash}` },
        { rel: 'stylesheet', href: `${assetsPublicPath}/user/login.css?time=${timeHash}` },
      )
    }
    return{
      script,
      link
    }
  }
}
</script>

<style>
  .login-page *{
    box-sizing: content-box;
  }
</style>