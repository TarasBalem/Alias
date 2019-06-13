<template>
  <div class="score">
    <div class="ready">
      <h2 class="score__title">Team {{ currentTeam.name }} ready?</h2>
    </div>
    <div class="score__team" v-for="c in teams" :key="c.id">
      <p>{{ c.name }} = {{ c.scoreLength }}</p>
    </div>
    <div class="ok">
      <button class="btn__ok">
        <router-link to="/play">
          <i class="material-icons material-icons-ok">check_circle_outline</i>
        </router-link>
      </button>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["playedTeam"])
  },
  computed: {
    ...mapState(["teams"]),
    ...mapGetters(["currentTeam"])
  }
};
</script>

<style lang="scss" scoped>
.score {
  text-align: center;
}
.score__title {
  padding-top: 20px;
  margin-top: 0;
}
.btn__ok {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  margin-top: 50px;
}
.material-icons-ok {
  font-size: 75px;
  color: rgb(39, 132, 219);
}
</style>
