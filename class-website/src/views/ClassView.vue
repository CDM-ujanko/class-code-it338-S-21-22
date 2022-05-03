<template>
  <div class="home">
    {{ $route.params.class }}
    <h3>{{ classData.key }}: {{ classData.name }}</h3>
    <div class="description" v-html="classData.description"></div>
  </div>

  <h4>Useful Links</h4>
  <ul>
    <li v-for="(link, i) in classData.links" :key="i">
      <a :href="link.path" target="_blank">
        {{ link.name }}
      </a> - {{ link.description}}
    </li>
  </ul>
</template>
<script>
import data from '@/data/data';

export default {
  name: 'ClassView',
  data() {
    return {
    }
  },

  computed: {
    classData() {
      return data.classes[this.$route.params.class]
    }
  }
}
</script>
