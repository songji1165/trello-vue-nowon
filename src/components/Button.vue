<template>
  <div id="btn">
    <div class="btn-wrapper" :class="{btnCircle:btnCircle}">
      <div class="btn-icon">
        <slot name="btnIcon"></slot>
      </div>
      <div class="btn-name">
        <slot name="btnName"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["isBtnCircle"],
    data() {
      return {
        btnCircle: this.isBtnCircle
      };
    }
  };
</script>

<style scoped lang="less">
  #btn {
    height: 45px;
    line-height: 45px;
    margin: 3px 2px;
    text-align: center;

    .btn-wrapper {
      vertical-align: middle;
      color: #fff;
      border-radius: 5px;
      height: 32px;
      line-height: 32px;
      padding:0 6px;
      background: rgba(255, 255, 255, 0.3);

      div {
        float: left;
      }

      .btn-icon {
        width: 20px;
        /* margin-right: 5px */
      }

      .btn-name{
      }

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1)
    }
    }
  }

  .btnCircle {
    border-radius: 50% !important;
  }
</style>
