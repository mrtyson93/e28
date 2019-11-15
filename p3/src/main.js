import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import WeatherPage from "./components/pages/WeatherPage.vue";


Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [{
  path: '/weather',
  component: WeatherPage,
  name: 'weather'
}]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')