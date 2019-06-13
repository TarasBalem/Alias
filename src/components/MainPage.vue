<template>
  <div class="main-page">
    <div class="info">
      <button class="btn__info">
        <router-link to="/info">
          <i class="material-icons">info</i>
        </router-link>
      </button>
    </div>
    <div class="logo">
      <img src="..\assets\alias_logo.png" alt="Logo" class="logo__img">
    </div>
    <Teams/>
    <div class="start">
      <button class="btn__start">
        <router-link to="/score">
          <i class="material-icons material-icons-start">play_circle_outline</i>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Teams from "./Teams.vue";

export default {
  name: "MainPage",
  components: {
    Teams
  }
};
</script>

<style lang="scss" scoped>
.info {
  position: absolute;
  right: 10px;
}
.btn__info {
  border: none;
  background: none;
  color: rgba(39, 132, 219, 0.7);
  margin-top: 10px;
  padding: 0;
  outline: none;

  :visited {
    color: rgba(39, 132, 219, 0.7);
  }
}
.logo {
  display: flex;
  justify-content: center;
}
.logo__img {
  height: 200px;
}
.start {
  text-align: center;
}
.btn__start {
  border: none;
  background: none;
  padding: 0;
  outline: none;
}
.material-icons-start {
  font-size: 75px;
  color: rgb(39, 132, 219);
}
</style>
