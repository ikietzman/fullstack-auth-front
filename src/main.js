import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebaseConfig from '../private/firebase-config'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
