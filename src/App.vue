<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      <router-view></router-view>
    </transition>
    <div class="g-bg">
      <canvas id="snow"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  z-index: 1;
  .g-bg{
    position: absolute;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    background-image: url('assets/imgs/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>
