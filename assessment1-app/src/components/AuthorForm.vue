<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Enter author name" v-model="authorName" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      authorName: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.authorName);
      this.authorName = '';
    },
  },
};
</script>

  