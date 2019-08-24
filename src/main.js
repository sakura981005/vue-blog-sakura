import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import myRouter from './router'

import axios from 'axios'


Vue.config.productionTip = false


Vue.use(VueRouter);


const router = new VueRouter({
  routes: myRouter
})


axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"


Vue.prototype.$axios = axios;



//封装自定义全局指令（无参数）
// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })


//封装自定义全局指令（有参数）
// Vue.directive("theme", {
//   bind(el, binding, vnode) {
//     if (binding.value == 'wide') {
//       el.style.maxWidth = "1260px";
//     } else if (binding.value == 'narrow') {
//       el.style.maxWidth = "560px";
//     }

//     if (binding.arg == "column") {
//       el.style.background = "greenyellow";
//       el.style.padding = "20px";
//     }
//   }
// })

// //自定义全局过滤器
// Vue.filter("to-uppercase", value => {
//   return value.toUpperCase();
// })


// Vue.filter("snippet", value => {
//   return value.slice(0, 100) + "...";
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
