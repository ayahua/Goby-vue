<template>
  <div>
    <TopNav />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import {TopNav, Sidebar} from 'jl-components'

export default {
  components: { TopNav, Sidebar},
  middleware: ['jsRoute','sysName','getUserInfo','getMenus'],
}
</script>