import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store, { Team } from "./store/store"

Vue.config.productionTip = false;


store.dispatch("addTeam", new Team("teamDog", require("./assets/dog.png")));
store.dispatch("addTeam", new Team("teamCat", require("./assets/cat.png")));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
