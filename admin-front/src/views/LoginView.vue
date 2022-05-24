<template>
  <div class="Login">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login() {
      console.log('login!');
      axios.post('http://localhost:3030/login', {username: this.username, password: this.password})
      .then((resp) => {
        console.log(resp);
        this.$store.commit('setUser', resp.data);
        this.$router.push('/');
      })
      .catch(console.error);

    }
  }
}
</script>
