<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bgcolor{
  width:100vw;
  height:2vh;
  background-color: gray;
}

.xbgcor{
   background-color: green;
    width: 6vw;
    height: 1vh;
}
</style>
