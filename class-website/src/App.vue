<template>
  <SiteNavigation :classes="classes"/>

  <div class="container py-3">
    <router-view/>
  </div>
</template>

<script>
import data from '@/data/data';

import SiteNavigation from '@/components/SiteNavigation';

export default {
  name: 'App',
  components: {
    SiteNavigation
  },
  data() {
    return {
      data: data
    }
  },

  computed: {
    classes() {
      return Object.keys(data.classes).map((key) => (
          {
            key: key,
            lectures: data.classes[key].lectures.map(w => ({name: w.name, hash: w.hash}))
          }
      ))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
