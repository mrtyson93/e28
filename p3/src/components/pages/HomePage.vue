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
          @click = 'search'
        >Search</v-btn>
      </div>
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
      cityState: null,
      zipCode: null,
      trueBool: true,
      falseBool: false
    };
  },
  methods: {
    search: function() {
      if (this.cityState != null) {
        localStorage.setItem("searched", true);
        let cityStateSplit = this.cityState.split(", ");

        localStorage.setItem("zip", "02139");
        localStorage.setItem("city", cityStateSplit[0]);
        localStorage.setItem("state", cityStateSplit[1]);
      } else {
        alert("enter a city");
      }
    }
  },
  mounted() {
    if (!localStorage.getItem("searched")) {
      localStorage.setItem("searched", false);
    }
    this.cities = axios.get("http://localhost:3000/cities").then(response => {
      this.cities = response.data;
      this.jsonResponseBool = true;
    });
  }
};
</script>
