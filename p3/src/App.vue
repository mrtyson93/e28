<template>
  <div id="app">
    <v-app>
      <br />
      <h1>USA City Explorer</h1>
      <br />
      <nav>
        <ul>
          <li v-for="link in links" :key="link">
            <router-link exact :to="{ name: link }">
              {{ link }}
            </router-link>
          </li>
        </ul>
      </nav>
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
