<template>
  <div class="login">
      <h3>Welcome</h3>
      <div><input type="text" v-model="email" name="" id="" placeholder="Username"></div>
      <div><input type="password" v-model="password" name="" id="" placeholder="Password"></div>
      <div><button v-on:click="login">connect</button></div>
      <div><router-link to="/sign-up">Dont have an Account?</router-link></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data: function(){
      return{
          email: '',
          password: ''
      }
  },
  methods: {
      login: function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              function(){
                  alert('Sucessfully logged in !')
              },
              function(err){
                  alert('Oops! ' + err.message)
              }
          );
      }
  }
}
</script>

<style scoped>

</style>
