import User from './components/user/User';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import UserEdit from './components/user/UserEdit';
import Settings from './components/user/Settings';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Category from './components/category/Categorylist.vue';
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path:'/', name:'home', component:Home},
    { path: '/about', name:'about', component:About},
    { path: '/user', name:'user', component: User},
    { path: '/useredit', name:'useredit', component:UserEdit},
    { path: '/contact', name:'contact', component:Contact},
    { path: '/category', name:'category', component:Category},
    { path: '/dashboard', name:'dashboard', component:Dashboard},
    { path: '/settings', name:'settings', component:Settings},
    { path: '/login', name:'login', component:Login},
    { path: '/register', name:'register', component:Register}
]