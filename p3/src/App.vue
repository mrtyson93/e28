<template>
  <div id="app">
    <v-app>
      <div>
        <v-toolbar>
          <v-toolbar-title>USA State Capital Explorer</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-for="link in links"
              :key="link"
            >
              <router-link
                exact
                :to="{ name: link }"
              >
                {{ link }}
              </router-link>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      links: ["Search", "Weather", "Breweries", "Events"]
    };
  }
};
</script>

<style lang="scss">
@import "./assets/css/style.css";
</style>
