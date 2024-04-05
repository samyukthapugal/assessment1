<template>
    <div>
      <h2>Submitted Authors</h2>
        <ul class="submitted-authors">
          <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['authors'],
  };
  </script>
  
  <style>

.submitted-authors{
  list-style-type: none; /* Remove bullet points */
  padding-left: 0; /* Remove left padding */
}
</style>