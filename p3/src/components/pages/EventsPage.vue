<template>
  <div>
    <p>Events Page</p>
    {{ products }}
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'EventsPage',
  data: function() {
    return {
      products: null
    };
  },
  mounted() {
    this.products = axios
      .get(
        'https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02139&radius=apikey=yVOXVXgMX7DMiA9It9NTYN48i9jBbwrB'
      )
      .then(response => {
        this.products = response.data;
      });
  }
};
</script>
