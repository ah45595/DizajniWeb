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
      <li class="nav-item" v-if="user.loggedIn">
        <router-link class="nav-link" to="/dashboard" >
          <a>Dashboard</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user" >
          <a>User</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact" >
          <a>Contact</a>
        </router-link>
      </li>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">
             <a class="nav-link"> {{user.data.displayName}} </a>
            </div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
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
      
    </ul>
  </div>
</nav>

</div>

</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>