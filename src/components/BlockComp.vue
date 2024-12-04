<template>
  <div class="block" v-if="showBlock">
    <p>click me</p>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data(){
    return{
      showBlock: false
    }
  },
  mounted(){
    setTimeout(()=> {
      this.showBlock = true
    },this.delay)
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