import Vue from "vue";
import App from "./App.vue";
import router from './router/router'
import store from './vuex/store'
import UUID from "vue-uuid";
 
Vue.use(UUID);

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
