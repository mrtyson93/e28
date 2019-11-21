<template>
  <div>
    <br />
    <span v-if="jsonResponseBool">
      <br />
      <v-autocomplete
        label="City"
        v-model="cityState"
        :items="cities"
        :outlined="trueBool"
        :rounded="trueBool"
      ></v-autocomplete>
      <div class="text-center">
        <v-btn
          rounded
          color="primary"
          dark
          :left="trueBool"
          :absolute="trueBool"
          @click="search"
          >Search</v-btn
        >
      </div>
    </span>
    <v-dialog v-model="badSearch" max-width="290">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Empty Search
        </v-card-title>
        <v-card-text>You must choose a city before searching.</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="badSearch = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-progress-circular
      indeterminate
      color="primary"
      v-show="loading"
    ></v-progress-circular>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      jsonResponseBool: false,
      cities: [],
      zips: [],
      cityState: null,
      zipCode: null,
      trueBool: true,
      falseBool: false,
      badSearch: false,
      loading: false
    };
  },
  methods: {
    search: function() {
      if (this.cityState != null) {
        this.loading = true;
        localStorage.setItem('searched', true);

        let cityStateSplit = this.cityState.split(', ');
        localStorage.setItem('city', cityStateSplit[0]);
        localStorage.setItem('state', cityStateSplit[1]);
        localStorage.setItem('zip', this.zips[cityStateSplit[0]]);
        window.location.href = '/weather';
      } else {
        this.badSearch = true;
      }
    }
  },
  mounted() {
    this.loading = false;
    if (!localStorage.getItem('searched')) {
      localStorage.setItem('searched', false);
    }
    this.cities = axios
      .get('https://my-json-server.typicode.com/mrtyson93/e28-p3-cities/cities')
      .then(response => {
        this.cities = response.data;
        this.jsonResponseBool = true;
      });
    this.zips = axios
      .get('https://my-json-server.typicode.com/mrtyson93/e28-p3-cities/zips')
      .then(response => {
        this.zips = response.data;
        this.jsonResponseBool = true;
      });
  }
};
</script>
