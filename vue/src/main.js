// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import HttpTool from "./components/Tool/HttpTool.js"
import UrlManager from "./components/Tool/UrlManager.js"
// import CommdTools from "./components/Tool/CommdTools.js"

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.HttpTool = HttpTool;
Vue.prototype.UrlManager = UrlManager;
// Vue.prototype.CommdTools = CommdTools;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
