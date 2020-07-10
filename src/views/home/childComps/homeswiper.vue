<template>
    <swiper>
                <swiperitem v-for="(item,index) in banners" :key="index">
                    <a :href="item.link">
                        <img :src="item.image" alt="" @load="imageload">
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
    data(){
        return{
            isload:false
        }
    },
    components:{
        swiper,
        swiperitem
    },
    methods:{
        imageload(){
            if(!this.isload){
                this.$emit('swiperimageload')
                this.isload = true
            }
        }
    }
}
</script>
<style>

</style>