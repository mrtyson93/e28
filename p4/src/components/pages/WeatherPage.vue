<template>
  <div>
    <br />
    <div v-if="!searched" data-tests="no-city">
      <v-card dark>
        <v-card-title
          >No city searched. Go back to Search page and select a
          city.</v-card-title
        >
      </v-card>
    </div>
    <v-progress-circular
      indeterminate
      color="primary"
      v-show="loading"
    ></v-progress-circular>
    <div v-if="jsonResponseBool && searched">
      <v-card dark>
        <v-img :src="iconUrl" height="100px" :contain="trueBool">
          <v-card-title>Weather: {{ city }}, {{ state }}</v-card-title>
        </v-img>
        <v-card-subtitle class="title text-uppercase">{{
          weather.weather[0].description
        }}</v-card-subtitle>
        <v-card-text data-test="city-selected">
          <div class="body-1">
            Temperature: {{ weather.main.temp }}&#8457;, Min:
            {{ weather.main.temp_min }}&#8457;, Max:
            {{ weather.main.temp_max }}&#8457;
          </div>
          <div class="body-1">Humidity: {{ weather.main.humidity }}&#37;</div>
          <div class="body-1">Wind: {{ weather.wind.speed }} <i>mph</i></div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

import * as app from './../../app.js';

export default {
  name: 'WeatherPage',
  data: function() {
    return {
      weather: null,
      trueBool: true,
      iconUrl: null,
      jsonResponseBool: false,
      searched: false,
      loading: false,
      currentCity: null
    };
  },
  mounted() {
    this.currentCity = new app.CurrentCity();

    if (this.searchedStorage == 'true') {
      this.loading = true;
      this.searched = true;
      let axiosURL =
        'https://api.openweathermap.org/data/2.5/weather?zip=' +
        this.zip +
        ',us&units=imperial&APPID=a8c08712ba7a89275fe576693ce14fa3';
      this.weather = axios.get(axiosURL).then(response => {
        this.weather = response.data;
        this.iconUrl =
          'https://openweathermap.org/img/wn/' +
          response.data.weather[0].icon +
          '@2x.png';
        this.jsonResponseBool = true;
        this.loading = false;
      });
    }
  },
  computed: {
    city: function() {
      return this.currentCity.getCity();
    },
    state: function() {
      return this.currentCity.getState();
    },
    zip: function() {
      return this.currentCity.getZip();
    },
    searchedStorage: function() {
      return this.currentCity.getSearched();
    }
  }
};
</script>
