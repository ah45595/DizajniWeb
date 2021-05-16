<template>

<div class="content">
    <div class="row">
      <!--
      <app-home-slider></app-home-slider>
      -->
      <div class="text">
  <h1>LATEST TECH NEWS!</h1>
  <p class="p">The latest tech news about the world's best (and sometimes worst) hardware, a
pps, and much more. From top companies like Google and Apple to tiny startups 
vying for your attention, Verge Tech has the latest in what matters in technology daily.</p>
</div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link to="/laptop">Laptops</router-link></li>
    <li class="breadcrumb-item"><router-link to="/desktop">Desktop</router-link></li>
    <li class="breadcrumb-item"><router-link to="/smartphones">Smartphone</router-link></li>
    <li class="breadcrumb-item"><router-link to="/security">Security</router-link></li>
  </ol>
</nav>
<div class="cate">
  <div class="category">
    <div class="card">
      <div class="c-body">
        <router-link to="/laptop">
        <img class="c-img" :src="require('../assets/laptops-cover.jpg')" />
        <h5 class="c-title">Google Maps will soon let you draw on a map to fix it</h5>
        <p class="c-text">By <span style="color:#E2127A">Mitchell Clark</span><span style="color:grey"> An hour ago  2 comments</span></p>
        </router-link>
      </div>
    </div>
     <div class="card">
      <div class="c-body">
         <router-link to="/laptop">
        <img class="c-img" :src="require('../assets/laptops-cover.jpg')" />
        <h5 class="c-title">Google Maps will soon let you draw on a map to fix it</h5>
        <p class="c-text">By <span style="color:#E2127A">Mitchell Clark</span><span style="color:grey"> An hour ago  2 comments</span></p>
        </router-link>
      </div>
    </div>
     <div class="card">
      <div class="c-body">
         <router-link to="/laptop">
        <img class="c-img" :src="require('../assets/laptops-cover.jpg')" />
        <h5 class="c-title">Google Maps will soon let you draw on a map to fix it</h5>
        <p class="c-text">By <span style="color:#E2127A">Mitchell Clark</span><span style="color:grey"> An hour ago  2 comments</span></p>
        </router-link>
      </div>
    </div>
     <div class="card">
      <div class="c-body">
        <router-link to="/laptop">
        <img class="c-img" :src="require('../assets/laptops-cover.jpg')" />
        <h5 class="c-title">Google Maps will soon let you draw on a map to fix it</h5>
        <p class="c-text">By <span style="color:#E2127A">Mitchell Clark</span><span style="color:grey"> An hour ago  2 comments</span></p>
        </router-link>
      </div>
    </div>
  </div>
</div>
</div>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12" v-for="product in productfields" v-bind:key="product._id">
      <h3 class="feature-title">{{ product.title }}</h3>
      <img src="`http://localhost:5000/images/${product.image}`" class="img-fluid">
      
      <p>{{ product.description }}</p>
    </div>
 
  </div> 
</div>
</template>
<style scoped>
div.text{
  text-align: center;
  font-family: Oswald;
  padding: 50px;
}
.maintext{
  font-size: 50px;
}
.p{
  font-family: Roboto;
  text-align: justify;
  padding-left: 150px;
  margin-right: 200px;
}
.c-img{
  width: 25%;
height: 50%;
object-fit: contain;
text-align:center;
}
.c-title{
  color: black;
  position: absolute;
  top: 10%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.c-text{
  color: black;
  position: absolute;
  top: 20%;
  left: 25%;
}
.button{
  border: 2px solid white;
background-color:black;
color:white;
padding: 10px 20px;
text-align: center;
font-size: 15px;
margin-left: 40px;
transition: 0.3s;
}
.name-color{
  color: #E2127A;
}
</style>
<script>
/* eslint-disable */

import axios from 'axios'
export default {
  name: "Home",
  props: ['mode'],

  name: 'CreateProducts',
  data () {
    return {
      productfields:{},
      products: {}
    }
  },
  created () {
    axios.get(`http://localhost:4000/products`)
    .then(response => {
      this.productfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:4000/products`, this.products)
      .then(function (response) {
        console.log(response);
        })
    }
  }
}
</script>