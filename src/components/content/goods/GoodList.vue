<template>
  <div class="goods">
    <goodlistitem v-for="(item, index) in goods" :key="index" :goodsitem="item">
    </goodlistitem>
  </div>
</template>
<script>
import goodlistitem from "components/content/goods/GoodListItem";
export default {
  name: "goodlist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodlistitem
  },
  mounted(){
    // console.log("goods=")
    // console.log(this.goods)
    // console.log("完事")
  }
};
</script>
<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:2px;
}
</style>
