<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockComp v-if="isPlaying" :delay="isPlaying"></BlockComp>
</template>

<script>
import BlockComp from './components/BlockComp.vue'
export default {
  name: 'App',
  components: { BlockComp },
  data(){
    return{
      isPlaying: false,
      delay: null,
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)
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
</style>
