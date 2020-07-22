import Vue from 'vue';
import Router from 'vue-router'

import Home from '@/components/Home';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Profile from '@/components/Profile';
import Login from '@/components/Login';
import Admin from '@/components/Admin';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        }
    ]
})