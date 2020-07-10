<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'scroll',
    props:{
        probetype:{
            type:Number,
            default:0
        },
        pullupload:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probetype,
            pullUpLoad:this.pullupload
        })
        if(this.probetype ===2||this.probetype ===3){
            this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
            })
        }
        if(this.pullupload == true){
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })}
    },
    methods:{
        scrollTo(x, y, time=500) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh() {
            this.scroll && this.scroll.refresh()
            console.log('123+refresh')
        },
        getscrollY(){
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>
<style scoped>
</style>