import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import AddUser from '@/components/users/AddUser.vue'
import EditUser from '@/components/users/EditUser.vue'
import ShowUsers from '@/components/users/ShowUsers.vue'
import UsersList from '@/components/users/UsersList.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import VueRouter from 'vue-router'
import firebase from '@/Firebase.js'
import router from './index'


export default new VueRouter({
    routes:[
        {path:'/', name:'home', component:Home},
        {path:'/users-list', name:'UsersList', component:UsersList,
        meta:{
            requiresAuth:true
        }
        },
        //{path:'/', name:'home', component:Home},
        //{path:'/header',component:() => /* webpackChunkName:'header' */ Header}
        {path:'/about',name:'about', component: About},
        {path:'/show-user/:id',name:'ShowUsers', component: ShowUsers},
        {path:'/add-user',name:'AddUser', component: AddUser},
        {path:'/edit-user/:id',name:'EditUser', component: EditUser},
        {path:'/login',name:'login', component: Login},
        {path:'/register',name:'register', component: Register},
    
    ]
})
router.beforeEach(async(to,from,next)=>{
    const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
    if(requiresAuth && !await firebase.getCurrentUser()){
        next('login');

    }else{
        next();
    }
});