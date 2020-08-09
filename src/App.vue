<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  background-color: #00163a;
}
</style>
