<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockComp v-if="isPlaying" :delay="isPlaying" @end="endGame"></BlockComp>
  <ResultComp v-if="showResult" :score="score"></ResultComp>
</template>

<script>
import BlockComp from './components/BlockComp.vue'
import ResultComp from './components/ShowResult.vue'
export default {
  name: 'App',
  components: { BlockComp, ResultComp },
  data(){
    return{
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
      console.log("delayTime", this.delay)
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
bottom[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
