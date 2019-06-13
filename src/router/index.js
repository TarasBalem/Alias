import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "../components/MainPage.vue";
import Score from "../components/views/Score.vue";
import Play from "../components/views/Play.vue";
import Info from "../components/views/Info.vue";


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/score",
      name: "score",
      component: Score,
    },
    {
      path: "/play",
      name: "play",
      component: Play,
    },
    {
      path: "/info",
      name: "info",
      component: Info,
    },
  ],
  mode: "history",
  base: "/Alias/"
});