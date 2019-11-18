import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import WeatherPage from "./components/pages/WeatherPage.vue";
import BreweryPage from "./components/pages/BreweryPage.vue";
import EventsPage from "./components/pages/EventsPage.vue";



Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [{
    path: '/weather',
    component: WeatherPage,
    name: 'weather',
  },
  {
    path: '/breweries',
    component: BreweryPage,
    name: 'breweries'
  },
  {
    path: '/events',
    component: EventsPage,
    name: 'events'
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')