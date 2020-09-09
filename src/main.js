import "./style";

import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./directive";
import { i18n } from "./lang";
import "./filter";
import "./icons";
import "./api/mocker.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
