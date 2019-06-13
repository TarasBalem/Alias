<template>
  <div>
    <div>{{ selectedWord }}</div>
    <div class="word__controls">
      <button class="btn btn__left" @click="createdWrong">
        <i class="material-icons material-icons-left">highlight_off</i>
      </button>
      <button class="btn btn__right" @click="createdRight">
        <i class="material-icons material-icons-right">check_circle_outline</i>
      </button>
    </div>
  </div>
</template>

<script>
import words from "../../static/words";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WordGenerator",
  data: () => ({
    words: [],
    selectedWord: ""
  }),
  computed: {
    ...mapGetters(["currentTeam"])
  },
  methods: {
    ...mapActions(["guessedWords"]),
    createdRight() {
      const randomWord = Math.floor(Math.random() * this.words.length);
      this.selectedWord = this.words[randomWord];
      this.guessedWords({
        word: this.selectedWord,
        id: this.currentTeam.id
      });
    },
    createdWrong() {
      const randomWord = Math.floor(Math.random() * this.words.length);
      this.selectedWord = this.words[randomWord];
    }
  },
  mounted() {
    this.words = [...words];
    const randomWord = Math.floor(Math.random() * this.words.length);
    this.selectedWord = this.words[randomWord];
  }
};
</script>

<style lang="scss" scoped>
.word__controls {
  display: flex;
  justify-content: space-around;
}
.btn {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  margin-top: 100px;
}
.btn__left {
  color: red;
}
.btn__right {
  color: green;
}
.material-icons-left {
  font-size: 75px;
}
.material-icons-right {
  font-size: 75px;
}
</style>
