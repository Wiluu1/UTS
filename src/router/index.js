import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Voucher
import Listvoucher from '../views/voucher/list'
import Addvoucher from '../views/voucher/add'
import Editvoucher from '../views/voucher/edit'
import Detailvoucher from '../views/voucher/detail'


// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/product-user',
			name: 'product-user',
			component: Product
		},
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},

		{
			path: '/list-voucher',
			name: 'list-voucher',
			component: Listvoucher
		},
		{
			path: '/add-voucher',
			name: 'add-voucher',
			component: Addvoucher
		},
		{
			path: '/edit-voucher',
			name: 'edit-voucher',
			component: Editvoucher
		},
		{
			path: '/detail-voucher',
			name: 'detail-voucher',
			component: Detailvoucher
		}
	]
})
