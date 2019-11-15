<template>
  <div>
    <p>Weather Page</p>
    {{ products }}
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'WeatherPage',
  data: function() {
    return {
      products: []
    };
  },
  mounted() {
    this.products = axios
      .get(
        'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products'
      )
      .then(response => {
        this.products = response.data;
      });
  }
};
</script>
