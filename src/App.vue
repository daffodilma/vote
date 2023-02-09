<template>
  <div id="app">
    <voting msg="行星防御理事会执剑人公共投票"/>
  </div>
</template>

<script>
import voting from './views/VotingPage.vue'

export default {
  name: 'App',
  components: {
    voting
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right, #FED0FC, #63D1EC);
  margin: 0;
  padding: 0;
}

</style>
