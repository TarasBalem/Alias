<template>
  <div class="play">
    <div class="time">
      <Timer/>
    </div>
    <div class="words">
      <WordGenerator/>
    </div>
  </div>
</template>



<script >
import Timer from "./Timer.vue";
import WordGenerator from "./WordGenerator";

export default {
  name: "Play",
  components: {
    Timer,
    WordGenerator
  }
};
</script>

<style lang="scss" scoped>
.play {
  padding-top: 30px;
  text-align: center;
}
.words {
  font-size: 50px;
  margin: 30px 0 30px 0;
}
</style>
