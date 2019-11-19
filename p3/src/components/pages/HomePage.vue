<template>
  <div>
    <br />
    <span v-if="jsonResponseBool">
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
    this.cities = axios.get("http://localhost:3000/cities").then(response => {
      this.cities = response.data;
      this.jsonResponseBool = true;
    });
  }
};
</script>
