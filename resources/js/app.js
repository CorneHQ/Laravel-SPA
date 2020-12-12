import App from './views/App'
import router from './router'
import Vue from 'vue'

require('./bootstrap')

const app = new Vue({
  el: '#app',
  components: {
    App
  },
  router
})
