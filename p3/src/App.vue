<template>
  <div id="app">
    <h1>City Information</h1>
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      links: ['weather']
    };
  }
};
</script>

<style lang="scss">
@import './assets/css/style.css';
</style>
