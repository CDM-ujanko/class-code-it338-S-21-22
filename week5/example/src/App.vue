<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your EXAMPLE iuhfsdiuhcdui Vue.js App"/>
    <TodoItem title="My List" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoItem from './components/Todo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoItem
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
