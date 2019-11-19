<template>
  <div>
    <br />
    <span v-if="jsonResponseBool">
      <v-text-field
        label="Zip Code"
        :outlined="trueBool"
        :rounded="trueBool"
      >
      </v-text-field>
      <h2>Or</h2>
      <br />
      <v-autocomplete
        label="City"
        v-model="city"
        :items="cities"
        :outlined="trueBool"
        :rounded="trueBool"
      ></v-autocomplete>
    </span>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      jsonResponseBool: false,
      cities: [],
      city: null,
      zipCode: null,
      trueBool: true,
      falseBool: false
    };
  },
  mounted() {
    this.cities = axios
      .get("https://my-json-server.typicode.com/mrtyson93/e28-p3-cities/cities")
      .then(response => {
        this.cities = response.data.hello;
        this.jsonResponseBool = true;
      });
  }
};
</script>
