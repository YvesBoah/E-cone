// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

// Layouts
import Default from './components/Layouts/Default'
import Footer from './components/Layouts/Footer'
import Simple from './components/Layouts/Simple'
// Layouts

// Déclaration des Layouts de facon globales
Vue.component('Default',Default)
Vue.component('Simple',Simple)
// Déclaration des Layouts de facon globales
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import swal from 'sweetalert2'
import VueClazyLoad from 'vue-clazy-load' // ES6 (Babel and others)
Vue.use(VueClazyLoad)
// import bModal from 'bootstrap-vue/es/components/modal/modal'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
// Vue.component('b-modal', bModal)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
