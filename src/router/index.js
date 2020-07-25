import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/:version/list',
		name: 'List',
		component: () => import( '../views/List.vue')
	},
	{
		path: '/:version/detail/:id',
		name: 'Detail',
		component: () => import( '../views/Detail.vue')
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
