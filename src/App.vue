<template>
  <div id="app">
    <v-header></v-header>
    <div id="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import VHeader from "./components/Header.vue";
export default {
  components: { VHeader }
};
</script>

<style lang="less" scoped>
#body {
  padding: 24px;
}
</style>
