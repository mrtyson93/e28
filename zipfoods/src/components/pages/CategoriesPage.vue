<template>
  <div>
    <h2>Categories</h2>
    <ul class="cleanList">
      <li
        v-for="(category, id) in categories"
        :key="id"
      >{{ category }}</li>
    </ul>
  </div>
</template>

<script>
//import * as app from "./../../app.js";

export default {
  name: "CategoriesPage",
  data: function() {
    return {
      categories: null
    };
  },
  methods: {
    loadCategories: function() {
      let categories = this.products.map(product => product.categories);
      let mergedCategories = [].concat.apply([], categories);

      // Return unique, sorted categories
      this.categories = [...new Set(mergedCategories)].sort();
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.loadCategories();
  }
};
</script>