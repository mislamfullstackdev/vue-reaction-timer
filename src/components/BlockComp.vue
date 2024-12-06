<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <p>click me</p>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data(){ 
    return{
      showBlock: false,
      timer : null,
      reactionTime: 0,
    }
  },
  mounted(){
    setTimeout(()=> {
      this.showBlock = true
      this.startTimer()
    },this.delay)
  },
  methods:{
    startTimer(){
     this.timer = setInterval(() => {
      this.reactionTime += 10
     }, 10) 
    },
    stopTimer(){
      clearInterval(this.timer)
      console.log("reactionTime", this.reactionTime)
      //send the data to parent component(App.vue)
      this.$emit('end', this.reactionTime)
    },
  }
}
</script>

<style>
    .block{
        width: 500px;
        background: #0faf87;
        border-radius: 20px;
        color:#fff;
        text-align: center;
        padding: 100px 0px;
        margin: 40px auto;
    }
</style>