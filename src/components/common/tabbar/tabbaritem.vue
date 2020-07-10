
<template>
    <div class="tab-bar-item" @click="itemclick()"> 
       <div v-if="!isactive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>  
       <div :style="activestyle"><slot name="item-text"></slot></div>         
    </div>
</template>
<script>
export default {
    name:'tabbaritem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isactive:true
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1;
            
        },
        activestyle(){
            return this.isactive ?{color:this.activecolor} :  {}
        }
    },
    methods:{
        itemclick(){
            this.$router.push(this.path);
            // new Promise((resolve,reject)=>{
            //     console.log('我好困啊');
            //     resolve("真的")
            // }).then(res =>{
            //     console.log(res+'没骗你')
            // })
        }
    }
}
</script>
<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  .active{
      color:red;
  }
</style>