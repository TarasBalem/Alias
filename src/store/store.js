import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    teams: {},
  },
  getters: {
    teamLength: (state) => Object.keys(state.teams).length,
    currentTeam: (state) => {
      const t = Object.values(state.teams).find(team => !team.isPlayed);

      return t
    },
  },
  mutations: {
    updateTeam(state, teams) {
      state.teams = { ...teams };
    },
    changeTeamName(state, payload) {
      state.teams[payload.id] = {
        ...state.teams[payload.id],
        name: payload.name
      };
    },
    playedTeam(state, id) {
      const t = Object.values(state.teams).find(t => !t.isPlayed);
      const teams = {
        ...state.teams,
        [id]: {
          ...t,
          isPlayed: !t.isPlayed
        }
      };
      state.teams = teams;
    },
    resetPlayedTeams(state) {
      state.teams = Object.entries(state.teams).reduce((teams, [id, team]) => {
        teams[id] = {
          ...team,
          isPlayed: false
        };

        return teams;
      }, {})
    }
  },
  actions: {
    addTeam({ commit, state }, team) {
      const teams = {
        ...state.teams,
        [team.id]: team
      }
      commit("updateTeam", teams);
    },
    deleteTeam({ commit, state }) {
      const teams = Object.values(state.teams);
      const upd = teams.slice(0, teams.length - 1);
      commit("updateTeam", reduceState(upd));
    },
    guessedWords({ commit, state, dispatch }, payload) {
      const t = { ...state.teams[payload.id] };
      const words = [...t.words];
      words.push(payload.word);
      dispatch("addTeam", {
        ...t,
        words,
        scoreLength: words.length
      });
    }
  },
});

function reduceState(state) {
  return state.reduce((acc, current) => {
    return {
      ...acc,
      [current.id]: current
    }
  }, {})
}

export class Team {
  constructor(name, img) {
    this.id = Date.now();
    this.name = name;
    this.img = img;
    this.words = [];
    this.scoreLength = 0;
    this.isPlayed = false;
  }
}