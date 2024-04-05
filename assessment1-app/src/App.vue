<template>
  <div>
    <h1>Assessment 1 App</h1>
    <author-form @submit="handleFormSubmit" />
    <author-list :authors="submittedAuthors" />
    
    <h2>Users</h2>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import AuthorForm from './components/AuthorForm.vue';
import AuthorList from './components/AuthorList.vue';
import UserService from './services/UserService.js';

export default {
  components: {
    AuthorForm,
    AuthorList,
  },
  data() {
    return {
      submittedAuthors: [],
      users: [],
    };
  },
  async mounted() {
    try {
      const users = await UserService.getUsers();
      this.users = users;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  methods: {
    handleFormSubmit(authorName) {
      if (typeof authorName === 'string') {
        this.submittedAuthors.push(authorName);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.submitted-authors, 
.user-list {
  list-style-type: none; 
  padding-left: 0; 
}
</style>


