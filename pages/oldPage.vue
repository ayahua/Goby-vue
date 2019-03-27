<template>
  <section class="old-page">
    <div id="contentWrap">
        <div id="app"></div>
    </div>
  </section>
</template>

<script>
import domains from '../untils/domains';

export default {
  head(){ 
    const {host, assetsPublicPath,env, timeHash, runDir} = this.$store.state.oldModePath;
    const {path} = this.$route;
    const script = [], link = [];
    if(env === 'dev' && path.toLowerCase().indexOf(runDir) > -1){
      script.push({ src: `${host}${this.$route.name !== 'custom' ? '/'+this.$route.name : ''}/${this.$route.params.pathMatch.split('.html')[0]}.js`,defer:'defer' })
    }else{
      script.push(
        { src: `${host}/member/static/qundian.js`,defer:'defer' },
        { src: `${assetsPublicPath}/manifest.js?time=${timeHash}`,defer:'defer' },
        { src: `${assetsPublicPath}/vendor.js?time=${timeHash}`,defer:'defer' },
        { src: `${assetsPublicPath}${this.$route.name !== 'custom' ? '/'+this.$route.name : ''}/${this.$route.params.pathMatch.split('.html')[0]}.js?time=${timeHash}`,defer:'defer' }
      );
      link.push(
         { rel: 'stylesheet', href: `${host}/member/static/common.css` },
        { rel: 'stylesheet', href: `${assetsPublicPath}/vendor.css?time=${timeHash}` },
        { rel: 'stylesheet', href: `${assetsPublicPath}${this.$route.name !== 'custom' ? '/'+this.$route.name : ''}/${this.$route.params.pathMatch.split('.html')[0]}.css?time=${timeHash}` },
      )
    }
    return{
      script,
      link
    }
  }
}
</script>