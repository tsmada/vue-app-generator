<template>
  <div id="app" class="mx-auto p-4 min-h-screen">
    <GeneratorPage />
  </div>
</template>

<script>
import GeneratorPage from './views/GeneratorView.vue'

export default {
  name: 'App',
  components: {
    GeneratorPage,
  }
}
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
