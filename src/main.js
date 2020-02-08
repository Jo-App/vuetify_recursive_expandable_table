import Vue from "vue"
import vuetify from "@/plugins/vuetify" // path to vuetify export
import VueRandomColor from 'vue-randomcolor'

import App from "./App.vue";

Vue.use(VueRandomColor)

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})