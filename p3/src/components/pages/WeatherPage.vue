<template>
  <div>
    <br>
    <v-card dark>
      <v-img
        :src="iconUrl"
        height="100px"
        :contain="trueBool"
      >
        <v-card-title>Weather</v-card-title>
      </v-img>
      <v-card-subtitle class="title text-uppercase">{{weather.weather[0].description}}</v-card-subtitle>
      <v-card-text>
        <div class="body-1">Temperature: {{weather.main.temp}}&#176;, Min: {{weather.main.temp_min}}, Max: {{weather.main.temp_max}}</div>
        <div class="body-1">Humidity: {{weather.main.humidity}}&#37;</div>
        <div class="body-1">Wind: {{weather.wind.speed}} <i>mph</i></div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "WeatherPage",
  data: function() {
    return {
      weather: null,
      trueBool: true,
      iconUrl: null
    };
  },
  mounted() {
    this.weather = axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip=02139,us&units=imperial&APPID=a8c08712ba7a89275fe576693ce14fa3"
      )
      .then(response => {
        this.weather = response.data;
        this.iconUrl =
          "http://openweathermap.org/img/wn/" +
          response.data.weather[0].icon +
          "@2x.png";
      });
  }
};
</script>
