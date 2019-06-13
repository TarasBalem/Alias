<template>
  <div class="teams">
    <h2>Teams</h2>
    <ul class="list">
      <template v-for="(team, key) in teams">
        <li class="list__items" :key="key">
          <span class="team__img">
            <img :src="team.img" :alt="team.img">
          </span>
          <input type="text" class="input" :value="team.name" @input="updateName($event, team.id)">
        </li>
      </template>
    </ul>
    <div class="controls">
      <span class="title__constorls">Add teams</span>
      <button class="btn__controls" @click="add" :disabled="teamLength >= 4">
        <i class="material-icons material-icons-add">add_circle_outline</i>
      </button>
      <button class="btn__controls" @click="deleteTeam" :disabled="teamLength <= 2">
        <i class="material-icons material-icons-delete">highlight_off</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import { Team } from "@/store/store";

export default {
  name: "Teams",
  methods: {
    ...mapActions(["addTeam", "deleteTeam"]),
    ...mapMutations(["changeTeamName"]),
    add() {
      if (this.teamLength == 2) {
        this.addTeam(new Team("teamPenguin", require("../assets/penguin.png")));
        return;
      }
      if (this.teamLength == 3) {
        this.addTeam(new Team("teamOwl", require("../assets/owl.png")));
        return;
      }
    },
    updateName({ target }, id) {
      const name = target.value;
      this.changeTeamName({ id, name });
    }
  },
  computed: {
    ...mapState(["teams"]),
    ...mapGetters(["teamLength"])
  }
};
</script>

<style lang="scss" scoped>
.teams {
  text-align: center;
}
.list {
  list-style: none;
  padding: 0;
}
.list__items {
  margin: 10px 0;
}
.input {
  margin-left: 5px;
  font-size: 20px;
  border: none;
  background: none;
  border-bottom: solid 1px rgb(187, 39, 39);
  font-family: "Open Sans", sans-serif;
  color: rgb(179, 6, 6);
  outline: none;
}
.title__controls {
  vertical-align: middle;
}
.btn__controls {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  vertical-align: middle;

  &[disabled] {
    opacity: 0.5;
  }
}
.material-icons-add {
  color: green;
}
.material-icons-delete {
  color: red;
}
</style>
