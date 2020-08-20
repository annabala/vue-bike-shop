import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/reset.scss";
import "./assets/scss/main.scss";
import Unicon from "vue-unicons";
import { uniShoppingCart, uniTrashAlt } from "vue-unicons/src/icons";

Unicon.add([uniShoppingCart, uniTrashAlt]);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
