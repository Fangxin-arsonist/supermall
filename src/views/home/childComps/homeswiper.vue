<template>
    <swiper>
                <swiperitem v-for="(item,index) in banners" :key="index">
                    <a :href="item.link">
                        <img :src="item.image" alt="">
                    </a>
                </swiperitem>
    </swiper>
</template>
<script>
import swiper from 'components/common/swiper/Swiper'
import swiperitem from 'components/common/swiper/SwiperItem'
export default {
    name:'homeswiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        swiper,
        swiperitem
    }
}
</script>
<style>

</style>