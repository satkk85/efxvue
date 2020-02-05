<template>
  <div class="container-fluid">
    <appHeader></appHeader>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import AppFooter from "./components/AppFooter";

  export default {
    data() {
      return {

      }
    },
    components:{
      AppFooter,
      appHeader:AppHeader
    }
  }
</script>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


</style>
