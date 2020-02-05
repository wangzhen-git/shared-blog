import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Util from '@/helpers/util.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
//全局安装，此后所有的vue实例都会具有这个方法
Vue.use(Util)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
