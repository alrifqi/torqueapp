<template>
  <div id="app" class="app">
    <DefaultLayout />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DefaultLayout from './layout/default.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DefaultLayout
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  height: 100vh;
}
</style>
