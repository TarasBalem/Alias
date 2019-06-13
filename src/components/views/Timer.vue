<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div id="timer">
        <span id="seconds">{{ seconds }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Timer",

  data: () => ({
    timer: null,
    // totalTime: 60,
    totalTime: 2,
    resetButton: false
  }),
  // ========================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();

        if (this.$store.getters.currentTeam) {
          this.$store.commit("playedTeam", this.$store.getters.currentTeam.id);
        }
        if (!this.$store.getters.currentTeam) {
          this.$store.commit("resetPlayedTeams");
        }

        this.$router.push("/score");
      }
    }
  },
  // ========================
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  }
};
</script>

<style lang="scss" scoped>
#timer {
  font-size: 20px;
  line-height: 1;
}
</style>
