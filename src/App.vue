<template>
  <div id="app">
    <app-header></app-header>
          <hr/>
    <router-view/>
    <hr/>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import Header from './components/TopHeader'
import Footer from './components/layouts/Footer'
export default {
  name: 'App',

  components: {
     'app-header': Header,
     'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
