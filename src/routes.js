import Home from './components/Home.vue'
import About from './components/About.vue'
import AddUser from './components/users/AddUser.vue'
import EditUser from './components/users/EditUser.vue'
import ShowUsers from './components/users/ShowUsers.vue'
import UsersList from './components/users/UsersList.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

export const routes =[
    {path:'/', name:'home', component:Home},
    {path:'/users-list', name:'UsersList', component:UsersList},
    //{path:'/', name:'home', component:Home},
    //{path:'/header',component:() => /* webpackChunkName:'header' */ Header}
    {path:'/about',name:'about', component: About},
    {path:'/show-user/:id',name:'ShowUsers', component: ShowUsers},
    {path:'/add-user',name:'AddUser', component: AddUser},
    {path:'/edit-user/:id',name:'EditUser', component: EditUser},
    {path:'/login',name:'login', component: Login},
    {path:'/register',name:'register', component: Register},
]