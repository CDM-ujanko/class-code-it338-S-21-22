<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <span v-else>Hi {{ name }}</span>
  </nav>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      isLoggedIn() {
        return this.$store.getters['isLoggedIn']
      },
      name() {
        return this.$store.getters['name']
      }
    },

    mounted() {
      this.$store.dispatch('getUserFromStorage');

      if (!this.isLoggedIn) {
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
