import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import WeatherPage from './components/pages/WeatherPage.vue';
import BreweryPage from './components/pages/BreweryPage.vue';
import EventsPage from './components/pages/EventsPage.vue';
import HomePage from './components/pages/SearchPage.vue';
import vuetify from './plugins/vuetify';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.config.productionTip = false;

const routes = [{
    path: '/',
    component: HomePage,
    name: 'Search'
  },
  {
    path: '/weather',
    component: WeatherPage,
    name: 'Weather'
  },
  {
    path: '/breweries',
    component: BreweryPage,
    name: 'Breweries'
  },
  {
    path: '/events',
    component: EventsPage,
    name: 'Events'
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
new Vue({
  router: router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app');