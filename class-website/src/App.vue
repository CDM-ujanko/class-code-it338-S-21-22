<template>
  <SiteNavigation :classes="classes"/>

  <div class="container py-3">
    <router-view/>
  </div>
</template>

<script>
import SiteNavigation from '@/components/SiteNavigation';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SiteNavigation
  },
  data() {
    return {
      classes: []
    }
  },

  mounted() {
    this.fetchClasses();
  },

  methods: {
    async fetchClasses() {
      // axios.get(`http://localhost:3030/classes`)
      //     .then(resp => {
      //       console.log('We got the response back!');
      //       this.classes = resp.data;
      //     })
      //     .catch(console.error)

      try {
        let resp = await axios.get(`http://localhost:3030/classes`);
        this.classes = resp.data;
      } catch (err) {
        console.error(err);
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
