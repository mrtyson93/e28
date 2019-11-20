<template>
  <div>
    <br>
    <v-card>
      <v-card-title>Breweries</v-card-title>
    </v-card>
    <v-card
      class="ma-4"
      dark
      v-for="brewery in breweries"
      :key=brewery.id
      :raised="trueBool"
    >
      <v-card-title>{{ brewery.name }}</v-card-title>
      <v-card-subtitle class="text-left">Brewery Type: {{ brewery.brewery_type }}</v-card-subtitle>
      <v-card-text>
        <div class="body-1 text-left">Address: {{ brewery.street }}, {{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }} </div>
        <div class="body-1 text-left">Website: <a
            :href="brewery.website_url"
            target="_blank"
          >{{ brewery.website_url }}</a></div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "BreweryPage",
  data: function() {
    return {
      breweries: null,
      trueBool: true
    };
  },
  mounted() {
    this.breweries = axios
      .get(
        "https://api.openbrewerydb.org/breweries?by_state=massachusetts&by_city=cambridge"
      )
      .then(response => {
        this.breweries = response.data;
      });
  }
};
</script>
