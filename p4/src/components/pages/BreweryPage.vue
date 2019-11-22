<template>
  <div>
    <br />
    <div v-if="!searched">
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
      <div v-if="hasBreweries">
        <v-card>
          <v-card-title>Breweries: {{ city }}, {{ state }}</v-card-title>
        </v-card>
        <v-card
          class="ma-4"
          dark
          v-for="brewery in breweries"
          :key="brewery.id"
          :raised="trueBool"
        >
          <v-card-title>{{ brewery.name }}</v-card-title>
          <v-card-subtitle class="text-left"
            >Brewery Type: {{ brewery.brewery_type }}</v-card-subtitle
          >
          <v-card-text>
            <div class="body-1 text-left">
              Address: {{ brewery.street }}, {{ brewery.city }},
              {{ brewery.state }} {{ brewery.postal_code }}
            </div>
            <div class="body-1 text-left">
              Website:
              <a :href="brewery.website_url" target="_blank">{{
                brewery.website_url
              }}</a>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-card v-else dark>
        <v-card-title>No Breweries in {{ city }}, {{ state }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'BreweryPage',
  data: function() {
    return {
      breweries: null,
      trueBool: true,
      jsonResponseBool: false,
      hasBreweries: false,
      searched: false,
      city: null,
      state: null,
      loading: false
    };
  },
  mounted() {
    if (localStorage.getItem('searched') == 'true') {
      this.loading = true;
      this.searched = true;
      let axiosURL =
        'https://api.openbrewerydb.org/breweries?by_state=' +
        localStorage.getItem('state') +
        '&by_city=' +
        localStorage.getItem('city');

      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state');
      this.breweries = axios.get(axiosURL).then(response => {
        if (response.data.length > 0) {
          this.breweries = response.data;
          this.hasBreweries = true;
        }
        this.jsonResponseBool = true;
        this.loading = false;
      });
    }
  }
};
</script>
