<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="tabcontrol-item" :class="{active:currenIndex === index}" @click="itemclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabcontrol',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currenIndex:0
        }
    },
    methods:{
        itemclick(index){
            this.currenIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style>
 .tabcontrol{
     display: flex;
     text-align: center;
     font-size: 13px;
     height: 40px;
     line-height: 40px;
     background-color: #ffffff;
 }
 .tabcontrol-item{
     flex: 1;
 }
 .active span{
    border-bottom: 3px solid pink;
    padding:3px;
 }
 .active{
     color: var(--color-high-text);
    
 }
</style>