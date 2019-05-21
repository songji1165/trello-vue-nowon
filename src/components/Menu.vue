<template>
  <div id="nav">
    <div class="nav-mask" @click="navMaskClick">
      <div class="nav-wrapper">
        <div class="nav-container" @click.stop>

          <div class="nav-header">
            <slot name="header"> </slot>
            <span class="closeIcon"><i class="fas fa-times"></i></span>
          </div>

          <div class="nav-body">
            <slot name="body"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      navMaskClick() {
        this.$emit("navClose");
      }
    }
  };
</script>

<style lang="less" scoped>
  .nav-container {
    padding: 10px;
    text-align: center;

    .nav-header{
      position: relative;
      border:1px solid #333

      .closeIcon{
        position: absolute;
        right: 0;
      }
    }
  }
</style>
