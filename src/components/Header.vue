<template>
<div>
<nav class="navbar navbar-expand-md">
  <a class="navbar-brand" href="#">VueJS - Web</a>
  <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="main-navigation">
    <ul class="navbar-nav">
      <li class="nav-item" >
         <router-link class="nav-link" to="/" >
          <a>Home</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about" >
          <a>About</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/users-list" >
          <a>Users List</a>
        </router-link>
      </li>
      <template v-if="user.loggedIn">
        <li class="nav-item">
          <a class="nav-link">{{user.data.displayName}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="signOut">Log Out!</a>
        </li>
      </template>
      <template v-else>
        <li class="nav-item">
         <router-link to="login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="register" class="nav-link">Register</router-link>
        </li>
      </template>


      
      
    </ul>
  </div>
</nav>



</div>

</template>

<script>
import {mapGetters} from "vuex"
import firebase from 'firebase'


export default {
  computed:{
    ...mapGetters({
      user:"user"
    })

  },methods:{
    signOut(){
      firebase
      .auth()
      .signOut()
      .then(()=>{
        this.$router.replace({
        name:"home"
      })
      })
    }
  }
}
</script>
