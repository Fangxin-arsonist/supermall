import Vue from 'vue'
import VueRouter from 'vue-router'
const home =() => import('views/home/home')
const category =() => import('views/category/category')
const profile =() => import('views/profile/profile')
const shopcart =() => import('views/shopcart/shopcart')
const detail =() => import('views/detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  }
  ,
  {
    path:'/category',
    component:category
  }
  ,
  {
    path:'/profile',
    component:profile
  }
  ,
  {
    path:'/shopcart',
    component:shopcart
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
