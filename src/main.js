import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from './pages/Portfolio.vue';
import jQuery from "jquery";


window.jQuery = window.$ = jQuery

Vue.config.devtools = true
Vue.use(VueRouter);


const routes = [
	{path: "/", component: Portfolio, alias: '/portfolio'},
	{path: "/portfolio", component: Portfolio}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router
})
