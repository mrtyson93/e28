<template>
  <div>
    <br />
    <span v-if="haveCityInfo">
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
          data-test="search-button"
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
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  data() {
    return {
      cityState: null,
      zipCode: null,
      trueBool: true,
      falseBool: false,
      badSearch: false,
      currentCity: null
    };
  },
  methods: {
    search: function() {
      if (this.cityState != null) {
        this.currentCity.setSearched(true);

        let cityStateSplit = this.cityState.split(', ');
        this.currentCity.setCity(cityStateSplit[0]);
        this.currentCity.setState(cityStateSplit[1]);
        this.currentCity.setZip(this.zips[cityStateSplit[0]]);
        this.$router.push('/weather');
      } else {
        this.badSearch = true;
      }
    }
  },
  mounted() {
    this.currentCity = new app.CurrentCity();

    if (!this.currentCity.getSearched()) {
      this.currentCity.setSearched(false);
    }
    this.$store.dispatch('setCitiesAndZips');
  },
  computed: {
    cities: function() {
      return this.$store.state.cities;
    },
    zips: function() {
      return this.$store.state.zips;
    },
    haveCityInfo: function() {
      return this.$store.state.haveCityInfo;
    }
  }
};
</script>
