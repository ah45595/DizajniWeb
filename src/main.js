import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//fajlli routes importohet te kjo pjese dhe ne at file kemi deklaruar routat e ndryshem se cila route te cila komponent dergon gjate klikut
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
