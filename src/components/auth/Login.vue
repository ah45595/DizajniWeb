<template>
<div class="auth-inner">
    <div class="auth-log">
        LOG IN
    </div>
    
    <form>
        <div class="form-group">
        Username
        <input type="username" class="form-control" placeholder="Username"/>
        </div>

        <div class="form-group">
        Password
        <input type="password" class="form-control" placeholder="Password"/>
        </div>
        
        <button class="btn-block">LOG IN</button>

        <div class="forgot-password">
            <a href="#" class="forgot-password">Forgot the password?</a>
        </div>
    </form>
</div>
</template>

<script>
/*eslint-disable */
import firebase from "firebase";

    export default{
        data() {
            return {
                form:{
                    email:"",
                    password:""
                },
                error:null
            };
        },
        methods:{
            submit(){
                firebase
                .auth()
                .signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(data=>{
                    this.$router.push({name:'home',})
                })
                .catch(err=>{
                    this.error =err.message;
                });
            }
        }
    };

</script>


<style>

.form-control {
    height: 100%;
    width: 100%;
    border-color: grey;
    box-shadow: none;
    border-radius: 50px;
    height: 40px;
}

.auth-inner{
    width: 410px;
    margin: auto;
    background: #ffffff;
    border: 1px solid rgb(112, 112, 112);
    padding: 50px 55px 45px 55px;
    transition: all .3s;
    padding-left: 60px;
}

.auth-log{
  text-align:center;
  font-size: 25px;
  font-weight: 400;
  font-family: Oswald;
  padding-top: 15px;
  margin-bottom: 30px;
}

.form-control{    
    height: 40px;
    width: 310px;
    margin-bottom: 30px;
}

.form-group{    
  text-align:left;
  font-family: Oswald;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}

.btn-block{
    background-color: black;
    color: white;
    font-family: Oswald;
    height: 30px;
    width: 310px;
    margin-bottom: 10px;
}

.forgot-password{
    color:red;
    text-align: right;
    font-size: 14px;
    font-family: oswald;
    font-weight: 500;
    padding-top: 20px;
    margin-bottom: 20px;
}
</style>