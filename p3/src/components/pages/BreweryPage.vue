<template>
  <div>
    <p>Brewery Page</p>
    {{ products }}
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'BreweryPage',
  data: function() {
    return {
      products: null
    };
  },
  mounted() {
    this.products = axios
      .get(
        'https://api.openbrewerydb.org/breweries?by_state=massachusetts&by_city=cambridge'
      )
      .then(response => {
        this.products = response.data;
      });
  }
};
</script>
