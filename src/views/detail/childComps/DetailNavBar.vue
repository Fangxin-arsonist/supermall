<template>
    <div>
        <navbar>
            <div slot="center" class="titles">
                <div v-for="(item,index) in titles" :key="index" class="titles-item">
                    {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>
<script>
import navbar from 'components/common/navbar/navbar'
export default {
    name:'detailnanbar',
    components:{
        navbar
    },
    data(){
        return{
            titles:['商品', '参数', '评论', '推荐']
        }
    }
}
</script>
<style scoped>
.titles{
    display:flex;
    font-size: 13px;
}
.titles-item{
    flex: 1 ;
}
</style>