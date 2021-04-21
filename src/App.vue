<template>
  <div>
    <app-Header></app-Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Slider from "./components/Home-Slider.vue";
export default {
  data() {
    return {
      text: "Hello World",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    Slider
  },
  directives: {
    "local-hightlight": {
      bind(el, binding, vnode) {
        el.style.color = "blue";
      },
    },
  },
};
</script>

<style>
@import "../src/assets/style.css";
</style>
