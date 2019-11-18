import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import WeatherPage from './components/pages/WeatherPage.vue';
import BreweryPage from './components/pages/BreweryPage.vue';
import EventsPage from './components/pages/EventsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [{
    path: '/',
    component: HomePage,
    name: 'Home'
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
  render: h => h(App)
}).$mount('#app');