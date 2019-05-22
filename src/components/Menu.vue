<template>
  <div id="nav">
    <div class="nav-mask">
      <div class="nav-wrapper">
        <div class="nav-container">
          <div class="header-wrapper">
            <div class="nav-header">
              <slot name="header" class="header"> </slot>

              <span class="closeIcon" @click.stop="menuHandelClick">
                <i class="fas fa-times"></i
              ></span>
            </div>
          </div>

          <div class="nav-body">
            <slot name="body" class="slot-body"> </slot>
          </div>

          <div class="nav-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // props:["headerTitle"],
    data() {
      return {};
    },
    methods: {
      menuHandelClick() {
        console.log("clink");
        this.$emit("closeMenu");
      }
    }
  };
</script>

<style lang="less" scoped>
  * {
    margin: 0;
  }
  #nav {
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
      height: 100%; */

    .nav-mask {
      /* width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      position: relative; */

      .nav-wrapper {
        width: 305px;
        background: #fff;
        border-radius: 5px;

        position: fixed;
        right: 0;
        top: 42px;
        box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
          0 0 0 1px rgba(9, 30, 66, 0.08);

        .nav-container {
          .header-wrapper {
            padding: 0 15px;
            color: #6b778c;
            .nav-header {
              position: relative;
              line-height: 40px;
              height: 40px;
              margin-top: 0;
              margin-bottom: 8px;
              border-bottom: 1px solid rgba(9, 30, 66, 0.13);
              text-align: center;
              .closeIcon {
                position: absolute;
                right: 0;
                top: 0;
                line-height: 40px;
                padding: 0 10px;
                cursor: pointer;
              }
            }
          }

          .nav-body {
            text-align: left;
          }
        }
      }
    }
  }
</style>
