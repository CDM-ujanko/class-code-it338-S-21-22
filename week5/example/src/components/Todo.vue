<template>
  <div class="card p-2">
    <h3>{{ title }} - {{ capitalizedTitle }}</h3>
    <div class="input-group mb-3">
      <input type="text" v-model="input" class="form-control" placeholder="Add an item">
      <button class="btn btn-outline-secondary" v-on:click="addItem" :disabled="input.length === 0"
          type="button">Add</button>
    </div>
    <ul v-if="list.length" class="list-group">
      <li v-for="(item, i) in list" :key="i" class="list-group-item">
        <input class="form-check-input" type="checkbox" @click="markDone(i)" >
        {{ item }}
      </li>
    </ul>
    <ul v-if="done.length" class="list-group">
      <li v-for="(item, i) in done" :key="i" class="list-group-item">
        <input class="form-check-input" type="checkbox" checked @click="markNotDone(i)">
        <del>{{ item }}</del>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    }
  },
  data() {
    return {
      input: '',
      list: ['Item one', 'item two'],
      done: ['Done!']
    }
  },

  computed: {
    capitalizedTitle() {
      return this.title.toUpperCase();
    }
  },

  methods: {
    addItem() {
      this.list.push(this.input);
      this.input = '';
    },

    markDone(i) {
      this.done = this.done.concat(this.list.splice(i, 1));
      // this.done.push(this.list.splice(i, 1)[0]);
    },

    markNotDone(i) {
      this.list = this.list.concat(this.done.splice(i, 1));
    },

    remove() {
      console.log('Removing from child!');
      this.$emit('remove', this.title);
    },

    // updateTitle() {
    //   console.log('emitting input!');
    //   this.$emit('update:modelValue', 'My New title');
    // }
  }
}
</script>

<style scoped lang="scss">
  $myColor: black;

  // Same:
  //.card h3 {
  //  text-transform: uppercase;
  //  color: $myColor;
  //}
  //
  //.card ul li {
  //  text-align: left;
  //  color: $myColor;
  //}

  .card {
    h3 {
      text-transform: uppercase;
      color: $myColor;
    }

    ul li {
      text-align: left;
      color: $myColor;
    }
  }

</style>