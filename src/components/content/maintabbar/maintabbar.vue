<template>
<tabbar>
      <tabbaritem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
         <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
         <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/shopcart">
         <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
         <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
         <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
</template>
<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbaritem from 'components/common/tabbar/tabbaritem'
export default {
    name:'maintabbar',
    components:{
        tabbar,
        tabbaritem
    }
}
</script>
<style>

</style>