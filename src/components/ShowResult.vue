<template>
  <div class="result">
    <h2>Your reaction score is : {{ score }} </h2>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ['score'],
    data(){
      return{
        rank: null
      }
    },
    mounted(){
      if( this.score < 200){
        this.rank = 'Ninja Fingers'
      } else if(this.score < 400){
        this.rank = 'Rapid Fingers'
      }else{
        this.rank = 'snail pace'
      }
    }
}
</script>

<style>
    .result{
        width: 400px;
        background: #727763;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        padding: 100px 0px;
        margin: 4px auto;
    }
    .rank{
      font-size: 1.4rem;
      color: #0faf87;
      font-weight: ;

    }
</style>