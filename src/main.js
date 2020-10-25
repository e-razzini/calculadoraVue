import Vue from 'vue'
import App from './App.vue'

//configuracao para erro dev.tools
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
