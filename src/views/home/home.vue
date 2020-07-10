<template>
    <div id="home">
            <navbar class="home-nav">
                <div slot="center">
                    购物街
                </div>
            </navbar>
            <scroll class="content" ref="scroll" :probetype="3" :pullupload="true" @scroll="contentscroll" @pullingUp="loadmore">
                <homeswiper :banners="banners"></homeswiper>
                <recommendview :recommends="recommends"></recommendview>
                <featureview></featureview>
                <tabcontrol class="tabcontrol" :titles="['流行','新款','精选']" @tabClick="tabClick"></tabcontrol>
                <goodlist :goods="goods[currentType].list"></goodlist>
            </scroll>
            <backtop v-show="isbacktopshow" @click.native="backtopclick()"></backtop>
    </div>
</template>
<script>
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/TabControl'
import goodlist from 'components/content/goods/GoodList'
import scroll from 'components/common/scroll/scroll'
import backtop from 'components/content/backtop/backtop'

import homeswiper from './childComps/homeswiper'
import recommendview from './childComps/RecommendView'
import featureview from './childComps/FeatureView'

import {getHomeMultidata,getHomeGoods} from '../../network/home'
export default {
    name:'home',
    components:{
        navbar,
        tabcontrol,
        goodlist,
        scroll,
        backtop,
        
        homeswiper,
        recommendview,
        featureview
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            isbacktopshow:false
        }
    },
    created(){     
        this.getHomeMultidata();
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    methods:{
        /* 事件监听相关函数 */
        loadmore(){
            this.getHomeGoods(this.currentType);
            this.$refs.scroll.scroll.refresh();

        },
        backtopclick(){
            this.scrollTo(0,0);
        },
        contentscroll(position){
            this.isbacktopshow = (-position.y)>1000
        },
        tabClick(index){
            console.log(index)
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },
        scrollTo(x,y,time =500){
           this.$refs.scroll.scroll.scrollTo(x,y,time); 
        },
        /* 网络请求相关函数 */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            console.log(res);
            this.banners =res.data.banner.list;
            this.recommends =res.data.recommend.list;
        })
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
            console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1;
            console.log(this.goods[type].list)

             this.$refs.scroll.scroll.finishPullUp();
        })
        }
    }
}
</script>
<style scoped>
 #home{
    padding-top: 44px;
    height: 100vh;
 }
 .home-nav{
     background-color: var(--color-tint);
     color: #ffffff;


     position: fixed;
     left:0;
     right: 0;
     top:0;
     z-index: 9;
    }
    .tabcontrol{
        position:sticky;
        top:44px;
        z-index: 9;
    }
    .content{
        height:calc(100% - 49px);
        overflow: hidden;
    }
</style>