<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{show: show}">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link v-for="c in classes"
              :key="c.key"
              :to="'/' + c.key"
              class="nav-link"
          >{{ c.key }}
          </router-link>
          <router-link to="/about" class="nav-link">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavigation',
  props: {
    classes: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      show: false
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
//nav.navbar .router-link-active {
//  color: red;
//}
</style>