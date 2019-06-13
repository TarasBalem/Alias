<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "app",
  data: () => ({}),
  components: {
    MainPage
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Open Sans", sans-serif;
  color: rgb(187, 39, 39);
  background-color: rgb(205, 201, 238);
  height: 100vh;
}
</style>