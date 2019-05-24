<template>
  <div id="btn">
    <div class="btn-wrapper" :class="[{btnCircle:btnCircle},{sideColor:sideColor}]">
      <div class="btn-icon">
        <i class="material-icons" v-show="!!btnIcon">{{ btnIcon }}</i>
        <slot name="btnIcon"></slot>
      </div>
      <div class="btn-titles">
        <span class="title" v-show="!!btnName">{{ btnName }}</span>
        <slot name="btnTitle"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["isBtnCircle", "btnIcon","btnName","sideColor"],
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
    /* text-align: center; */

    .btn-wrapper {
      vertical-align: middle;
      color: #fff;
      border-radius: 5px;
      height: 32px;
      line-height: 32px;
      /* padding: 0 6px; */
      background: rgba(255, 255, 255, 0.3);

      div {
        float: left;
      }

      .btn-icon {
        width: 32px;
        height: 32px;
        text-align: center;
        i {
          /* font-size: 20px; */
          line-height: 32px;
        }
      }
      .title{
        margin:0 5px;
      }
      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  .sideColor {
    color: #172b4d;
    font-weight: bold;
    background: none;
    line-height: 45px;
    .btn-icon{
      line-height:45px;
      height:45px;
      margin-right:10px;
      i{
      height:45px;
      line-height:45px;
      }
    }
    .title{
      margin: 0
    }
    &:hover {
        cursor: pointer;
        background:none
      }
  }
  /* .hoverNone{
    &:hover {
        cursor: none;
        background:none
      }
  } */

  .btnCircle {
    border-radius: 50% ;
  }

  }
</style>
