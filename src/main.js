import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueAxios, axios)

const firebaseConfig = {
	apiKey: "AIzaSyDx1McH7en01sdM02Exy_qUepyEqNJy9jQ",
	authDomain: "argama-283817.firebaseapp.com",
	databaseURL: "https://argama-283817.firebaseio.com",
	projectId: "argama-283817",
	storageBucket: "argama-283817.appspot.com",
	messagingSenderId: "28298377391",
	appId: "1:28298377391:web:cbb58f6d86a462d58dbc5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
