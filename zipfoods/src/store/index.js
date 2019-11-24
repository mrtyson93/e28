import Vue from 'vue'
import Vuex from 'vuex'

import * as app from "./../app.js";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: [],
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        setProducts(context) {
            app.axios.get('https://e28-zipfoods-mrtyson.firebaseio.com/products.json').then(response => {
                context.commit('setProducts', response.data.slice(1));
            });
        }
    },
    getters: {
        getProductById(state) {
            return function (id) {
                return state.products.find(product => product.id == id)
            }
        }
    }
})