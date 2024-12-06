<template>
  <div class="result">
    <h2>Your reaction score is : {{ score }} </h2>
  </div>
</template>

<script>
export default {
    props: ['score'],
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
</style>