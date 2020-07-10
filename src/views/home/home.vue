<template>
    <div id="home">
            <navbar class="home-nav">
                <div slot="center">
                    购物街
                </div>
            </navbar>
            <tabcontrol class="tabcontrol"  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol1" v-show="istabcontrolshow"></tabcontrol>
            <scroll class="content" ref="scroll" :probetype="3" :pullupload="true" @scroll="contentscroll" @pullingUp="loadmore">
                <homeswiper :banners="banners" @swiperimageload="swiperimageload"></homeswiper>
                <recommendview :recommends="recommends"></recommendview>
                <featureview></featureview>
                <tabcontrol  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2"></tabcontrol>
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

import {debounce} from 'common/utils'
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
            isbacktopshow:false,
            taboffsettop:0,
            istabcontrolshow:false,
            saveY:0
        }
    },
    created(){     
        this.getHomeMultidata();
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.getscrollY();
    },
    mounted(){  
        const refresh = debounce(this.$refs.scroll.refresh)
        this.$bus.$on('itemImageLoad',()=>{
            // this.$refs.scroll.scroll.refresh();
            // this.$refs.scroll.refresh()
            refresh();
            // console.log('123')
            // console.log(this.$refs.scroll.scroll.refresh())
        })     
    },
    methods:{
        /* 事件监听相关函数 */
        loadmore(){
            this.getHomeGoods(this.currentType);
            this.$refs.scroll.refresh();
        },
        backtopclick(){
            this.$refs.scroll.scrollTo(0, 0)
        },
        contentscroll(position){
            //判断置顶图标显示
            this.isbacktopshow = (-position.y)>1000
            //判断tabcontrol 吸顶效果
            this.istabcontrolshow = (-position.y)>this.taboffsettop
            
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
            this.$refs.tabcontrol1.currenIndex = index;
            this.$refs.tabcontrol2.currenIndex = index;
            console.log("1="+this.$refs.tabcontrol1.currenIndex)
            console.log("2="+this.$refs.tabcontrol2.currenIndex)
        },
        swiperimageload(){
            this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
        },
        /* 网络请求相关函数 */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            // console.log(res);
            this.banners =res.data.banner.list;
            this.recommends =res.data.recommend.list;
        })
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
            // console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1;
            // console.log(this.goods[type].list)
            //完成上拉加载更多
             this.$refs.scroll.scroll.finishPullUp();
        })
        }
    }
}
</script>
<style scoped>
 #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
 }
 .home-nav{
     background-color: var(--color-tint);
     color: #ffffff;


     /* position: fixed;
     left:0;
     right: 0;
     top:0;
     z-index: 9; */
    }
    .tabcontrol{
        position: relative;;
        z-index: 9;
    }
    .content{
        /* height:calc(100% - 49px);
        overflow: hidden; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    }
</style>