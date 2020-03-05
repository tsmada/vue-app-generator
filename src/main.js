import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import './assets/styles.css'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
