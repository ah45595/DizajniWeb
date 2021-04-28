<template>
 <div class="auth-inner">
    <div class="auth-log">
<<<<<<< Updated upstream
        SIGN UP
=======
        Sign Up
>>>>>>> Stashed changes
    </div>
    
    <form>
         
       <div class="form-group">
        Full Name
        <input type="name" class="form-control" v-model="full_name" placeholder="Name"/>
        </div>

        <div class="form-group">
        <important>Email</important>
        <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
        <important>Username</important>
        <input type="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>

        <div class="form-group">
        <important>Password</important>
        <input type="password" class="form-control" v-model="password" placeholder="Password"/>
                
            <div class="login">
                <a href= "/Login" class="login">Already have an account?</a>
            </div>
        
        </div>
        <button class="btn-block">Register</button>
    </form>

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



<style>

.auth-inner{
    width: 410px;
    margin: auto;
    background: #ffffff;
    border: 1px solid rgb(112, 112, 112);
    padding: 50px 55px 45px 55px;
    transition: all .3s;
    padding-left: 60px;
}


.form-control {
    height: 100%;
    width: 100%;
    border-color: grey;
    box-shadow: none;
    border-radius: 50px;
    height: 40px;
}

.auth-text{
    
  text-align:center;
  font-size: 40px;
  font-weight: 400;
  font-family: Oswald;
  padding-top: -14px ;
}

.auth-log{
  text-align:center;
  font-size: 25px;
  font-weight: 400;
  font-family: Oswald;
  padding-top: 20px;

}

.form-control{    
    
    height: 40px;
    width: 310px;
}

.form-group{    
  text-align:left;
  font-family: Oswald;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-top: 15px ;
}

.btn-block{
    background-color: black;
    color: white;
    font-family: Oswald;
    height: 30px;
    width: 310px;
}

.login{
    color:grey;
    text-align: left;
    font-size: 14px;
    font-family: oswald;
    font-weight: 500;
    padding-top: 8px;
    
}
</style>