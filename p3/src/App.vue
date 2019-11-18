<template>
  <div id="app">
    <v-app>
      <br />
      <v-toolbar short="true" exension-height="10">
        <v-toolbar-title>USA City Explorer</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-for="link in links" :key="link">
            <router-link exact :to="{ name: link }">
              {{ link }}
            </router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      links: ['Home', 'Weather', 'Breweries', 'Events']
    };
  }
};
</script>

<style lang="scss">
@import './assets/css/style.css';
</style>
