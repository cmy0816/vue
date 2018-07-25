<template>
    <router-view/>
</template>

<script>
const FastClick = require('fastclick')
FastClick.attach(document.body)
export default {
  name: 'App'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>