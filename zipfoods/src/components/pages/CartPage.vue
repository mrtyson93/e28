<template>
  <div id='cart-page'>
    <h1>Your Cart</h1>

    <div v-if='items.length == 0'>No items</div>

    <ul
      data-test="cart-contents"
      v-else-if='products'
      class='cleanList'
    >
      <li
        v-for='item in items'
        :key='item.slug '
      >
        <button
          data-test="remove-from-cart-button"
          @click='removeFromCart(item.slug)'
        >Remove</button>
        {{ item.quantity }} x {{ getProductDetails(item.slug)['name'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from "./../../app.js";
export default {
  name: "CartPage",
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  methods: {
    getProductDetails(productSlug) {
      return this.$store.getters.getProductBySlug(productSlug);
    },
    removeFromCart: function(productId) {
      this.cart.remove(productId);
      this.$store.commit("setCartCount", this.cart.count());
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.cart = new app.Cart();
    this.items = this.cart.getItems();
  }
};
</script>