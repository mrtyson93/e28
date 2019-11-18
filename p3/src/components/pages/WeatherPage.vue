<template>
  <div>
    <p>Weather Page</p>
    {{ weather }}
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'WeatherPage',
  data: function() {
    return {
      weather: null
    };
  },
  mounted() {
    this.weather = axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?zip=02139,us&units=imperial&APPID=a8c08712ba7a89275fe576693ce14fa3'
      )
      .then(response => {
        this.weather = response.data;
      });
  }
};
</script>
