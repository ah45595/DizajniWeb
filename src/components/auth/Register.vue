<template>
<div class="container">
    <div class="col-md-8">
        <div class="card">Register</div>
        <div v-if="error" class="alert aler-danger" >{{error}}</div>
        <form action="#" @submit.prevent="submit">
            <input id="email" type="email" name="email"  required autofocus v-model="form.email"/><br>
            <input id="password" type="text" name="password"  required  v-model="form.password"/><br>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
</div>
</div>
</template>

<script>
import firebase from "firebase";

    export default{
        data() {
            return {
                form:{
                    name:"",
                    email:"",
                    password:""
                },error:null
            };
        },
        methods:{
            submit(){
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(data=> {
                    data.user
                    .updateProfile({
                        displayName:this.form.name
                    })
                .then(() =>{});
                })
                .catch(err => {
                    this.error=err.message;
                });
            }
        }
    };

</script>