<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>
<script>
import maintabbar from 'components/content/maintabbar/maintabbar'
export default {
  name:'app',
  components:{
    maintabbar
  }
}
</script>
<style>
@import "./assets/css/base.css"
</style>
