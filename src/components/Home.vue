<template>

<div class="container features">
    <div class="row">
  <h1>Welcome to the Home Page!</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.</p>
</div>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12" v-for="product in productfields" v-bind:key="product._id">
      <h3 class="feature-title">{{ product.title }}</h3>
      <img :src="`http://localhost:5000/images/${product.image}`" class="img-fluid">
      
      <p>{{ product.description }}</p>
    </div>
 
    <!--<div class="col-lg-4 col-md-4 col-sm-12">		
        <h3 class="feature-title">Comment us</h3>
<form @submit="onSubmit">
<div class="form-group">
  <input type="text" class="form-control" placeholder="Name" v-model="products.name">
</div>
<div class="form-group">
  <input type="text" class="form-control" placeholder="Description" v-model="products.image">
</div>
<div class="form-group">
  <textarea class="form-control" rows="4" v-model="products.description"></textarea>
</div>
<input type="submit" class="btn btn-secondary btn-block" value="Send">
</form>
    </div>-->
  </div> 
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateProducts',
  data () {
    return {
      productfields:{},
      products: {}
    }
  },created () {
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