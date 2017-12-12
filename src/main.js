// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyB14JBFmowN4SHkA7H_gZklEgfu0s4n_pY",
  authDomain: "vuefire26.firebaseapp.com",
  databaseURL: "https://vuefire26.firebaseio.com",
  projectId: "vuefire26",
  storageBucket: "vuefire26.appspot.com",
  messagingSenderId: "614064215604"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
