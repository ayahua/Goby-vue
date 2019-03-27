<template>
    <div class="login-bg">
        <nuxt />
    </div>
</template>

<script>
export default {
  middleware: ['jsRoute','getUserInfo'],
}
</script>