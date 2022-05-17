<template>
  <main class="class">
    <h2>{{ classData.key }}: {{ classData.name }}</h2>
    <section class="description" v-html="classData.description"></section>

    <section class="links">
      <h3>Useful Links</h3>
      <ul class="list-group">
        <li v-for="(link, i) in classData.links" :key="i" class="list-group-item">
          <a :href="link.path" target="_blank">
            {{ link.name }}
          </a> - {{ link.description }}
        </li>
      </ul>
    </section>

    <section v-for="lecture in classData.lectures"
        :key="lecture.hash"
        :id="lecture.hash"
        class="lectures"
    >
      <h3>{{ lecture.name }}</h3>
      <div v-html="lecture.description"></div>

      <div v-for="assignment in lecture.assignments"
          :key="assignment.name"
          class="assignment"
      >
        <h4>{{ assignment.name }}</h4>
        <div v-html="assignment.description"></div>
      </div>

    </section>
  </main>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ClassView',
  data() {
    return {
      classData: {},
    }
  },

  mounted() {
    this.fetchData(this.$route.params.class);
  },

  watch: {
    '$route.params.class': 'fetchData'
  },

  methods: {
    fetchData(key) {
      axios.get(`http://localhost:3030/class/${key}`)
          .then(resp => {
            this.classData = resp.data;
          })
          .catch(console.error)
    }
  }
}
</script>

<style lang="scss">

.lectures {
  h2, h3, h4 {
    margin-top: 2rem;
  }

  img {
    max-width: 100%;
    max-height: 80vh;
    display: block;
    margin: 0 auto;
  }
}


pre, code {
  font-family: monospace, monospace;
}

pre {
  overflow: auto;
  max-width: 100%;
  background: #054561;
}

pre > code {
  display: block;
  padding: 1rem;
  word-wrap: normal;
  background: #054561;
  color: white;
  border-radius: 4px;
}

</style>
