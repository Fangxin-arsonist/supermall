<template>
    <div id="detail">
        <detailnavbar></detailnavbar>
    </div>
</template>
<script>
import detailnavbar from './childComps/DetailNavBar'
export default {
    name:'detail',
    components:{
        detailnavbar
    },
    data(){
        return{
            iid:null
        }
    },
    created(){
        this.iid = this.$route.params.iid;
    }
}
</script>
<style scoped>

</style>