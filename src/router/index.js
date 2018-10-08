import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import News from '../pages/News/News.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import User from '../pages/User/User.vue'
import UserSetting from '../pages/User/UserSetting.vue'

Vue.use(Router)

export default new Router({
  routes: 
  [
    { 
    	path: '/home', component: Home, meta: { showFooter: true }
    },
    { 
    	path: '/news', component: News, meta: { showFooter: true }
    },
    { 
    	path: '/shopCart', component: ShopCart, meta: { showFooter: true }
    },
    {
      path: '/user', component: User, meta: { showFooter: true },
    },
    {
      path: '/user/userSetting', component: UserSetting, meta: { showFooter: false },
    },
  ]
})
