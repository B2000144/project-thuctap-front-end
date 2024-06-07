<template>
    <div>
      <h1>API Data</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <ul>
          <li v-for="item in data" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  export default {
    name: 'ApiComponent',
    setup() {
      const data = ref([]);

      const getAllTodos = async () =>
        try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // console.log(res.data)
        getAllTodos.value = res.data
      } catch (error) {
        console.log(error) {

        }

      }

      const loading = ref(true);
      const error = ref(null);
  
      onMounted(async () => {
        try {
          const response = await axios.get('https://api.example.com/data');
          data.value = response.data;
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      });
  
      return { data, loading, error };
    }
  };
  </script>
  