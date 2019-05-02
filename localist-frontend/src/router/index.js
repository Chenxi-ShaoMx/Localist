import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Users from '@/components/Users.vue'
import Signin from '@/components/Signin.vue'
import Home from '@/components/Home.vue'
import Tours from '@/components/Tours.vue'
import Guides from '@/components/Guides.vue'
import SingleGuide from '../components/SingleGuide'
import SingleTour from '../components/SingleTour'
import CreateGuide from '../components/CreateGuide'
import CreateTour from '../components/CreateTour'

Vue.use(VueRouter)
const router = new VueRouter({
	mode   : 'history',
	routes : [
		{
			path     : '*',
			redirect : '/'
		},
		{
			path      : '/',
			name      : 'home',
			component : Home
		},
		{
			path      : '/signin',
			name      : 'signin',
			component : Signin
		},
		{
			path      : '/users',
			name      : 'Users',
			component : Users,
			meta      : {
				requiresAuth  : true,
				requiresAdmin : true
			}
		},
		{
			path      : '/tours',
			name      : 'Tours',
			component : Tours
		},
		{
			path      : '/guides',
			name      : 'Guides',
			component : Guides
		},
		{
			path      : '/guides/createguide',
			name      : 'createGuide',
			component : CreateGuide,
			meta      : {
				requiresAuth : true
			}
		},
		{
			path      : '/tours/createtour',
			name      : 'createTour',
			component : CreateTour,
			meta      : {
				requiresAuth : true
			}
		},
		{
			path      : '/guides/single/:id',
			name      : 'guideID',
			component : SingleGuide
		},
		{
			path      : '/tours/single/:id',
			name      : 'tourID',
			component : SingleTour
		}
	]
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
	const requiresAdmin = to.matched.some((x) => x.meta.requiresAdmin)
	const currentAdmin = store.getters.getAdminStatus
	const currentUser = store.getters.getCurrentUser

	if (requiresAdmin && !currentAdmin) {
		next('/signin')
	}
	else if (requiresAuth && !currentUser) {
		next('/signin')
	}
	else if (requiresAuth && currentUser) {
		next()
	}
	else {
		next()
	}
})

export default router
