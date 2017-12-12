<template>
  <div class="sign-up">
      <h3>Let's create a new account !</h3>
      <input type="email" v-model="email" name="email" id="email">
      <input type="password" v-model="password" name="new-password" id="newPassword">
      <button v-on:click="register">Create</button>
      <p href="">OR go back to <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function(){
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      register: function(){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              function(user){
                  alert('Created');
              },
              function(err){
                  alert('Oops ! ' + err.message);
              }
          );
      }
  }
}
</script>

<style scoped>

</style>

