<template>
  <div>
    <header>
    <nav class="navbar navbar-expand-md">
      <a class="navbar-brand" id="logo" href="#">TECHNEWS</a>
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#main-navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main-navigation">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="user.loggedIn">
            <router-link class="nav-link" to="/dashboard">
              <a>DASHBOARD</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <a>MË TË REJAT</a>
            </router-link>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <router-link class="nav-link" to="/category">
                <a>KATEGORITË</a>
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
              </router-link>
              <div class="dropdown-background">
                <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
                  <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/laptop">Laptop</router-link>
                    </b-dropdown-item>
                  <b-dropdown-item href="#">
                   <router-link class="nav-link" to="/desktop">Desktop</router-link>
                    </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/gaming">Gaming</router-link>
                    </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/security">Security</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/cloud">Cloud</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/smartphones">Smartphone</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/5G">5G</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                    <router-link class="nav-link" to="/iot">IoT</router-link>
                    </b-dropdown-item>

                </b-dropdown>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <a>ABOUT US</a>
            </router-link>
          </li>
          <li class="nav-item" v-if="user.loggedIn">
            <router-link class="nav-link" to="/Howto">
              <a>HOW TO</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">
              <a>CONTACT</a>
            </router-link>
          </li>
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              id="search-button"
              type="button"
              class="btn btn-outline-primary"
            >
              search
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav ml-auto">
              <template v-if="user.loggedIn">
                <div class="nav-item">
                  <a class="nav-link"> {{ user.data.displayName }} </a>
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
                  <router-link to="register" class="nav-link"
                    >Register</router-link
                  >
                </li>
                <Toggle :mode="mode" @toggle="$emit('toggle')"/>
              </template>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Toggle from '@/components/Toggle';

export default {
 name:'Header',
  props:['mode'],
    components: {
      Toggle
    },
   computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),

    methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          })
        })
      }
    }
  }
}
</script>

<style>
.dropdown-toggle:after {
  color: #e2127a;
  font-size:28px;
}
.btn-secondary {
  color: #fff;
  background: transparent;
  border: none;
}
.dropdown-background {
    background: #343434;
    display: none;
    position: absolute;
}
#dropdownMenu2:hover{
    background: #343434;
}


</style>
