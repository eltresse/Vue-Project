// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
 import HelloWorld from './components/HelloWorld'
  import Table from './components/Table'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueResource)


const router = new VueRouter({

	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component:HelloWorld},
		{path: '/test', component: Table}
	]
});

/* eslint-disable no-new 
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/

new Vue({
	router,
	template:`<div id="app">
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/test">Userlist</router-link></li>
		</ul>
		<router-view></router-view>
	</div>`

}).$mount('#app')

