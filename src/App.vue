<template>
  <div id="app">
      <v-header id="header"></v-header>
    <div id="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import VHeader from "./components/Header.vue";
import axios from "axios"

export default {
  components: { VHeader },
  mounted() {
    if(!sessionStorage.getItem('TOKEN')){
      this.$router.push("/signin")
    }
  },
};
</script>

<style lang="less" scoped>
#header{z-index: 10}
#body {
  padding: 24px;
}
</style>
