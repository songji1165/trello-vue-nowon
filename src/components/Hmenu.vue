<template>
  <div id="nav">
    <div class="nav-mask">
      <div class="nav-wrapper">
        <div class="nav-container">
          <div class="nav-header">
            {{ navHeader }}
            <span class="closeIcon" @click.stop="clickCloseIcon">
              <i class="fas fa-times"></i
            ></span>
          </div>
          <hr />
          <div class="nav-body">
            <ul>
              <li v-for="text in navBody">
                <p @click.stop="clickNavBody">{{ text }}</p>
              </li>
            </ul>
          </div>
          <hr v-show="!!navFooter" />
          <div class="nav-footer" v-show="!!navFooter">
            <p @click.stop="clickNavFooter">{{ navFooter }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["navHeader", "navBody", "navFooter"],
    data() {
      return {};
    },
    methods: {
      clickCloseIcon() {
        this.$emit("closeMenu");
      },
      clickNavBody() {
        if (event.target.innerHTML == "Profile") {
          this.$router.push("profile");
          this.$emit("closeMenu");
        } else if (event.target.innerHTML == "Cards") {
          // this.$store.dispatch('ADD_BOARD')
          // this.$router.push("cardlist");
          // this.$emit("closeMenu");
        } else if (event.target.innerHTML == "Settings") {
          this.$router.push("profile");
          this.$emit("closeMenu");
        }
      },
      clickNavFooter() {
        if (this.navFooter == "Logout") {
          this.$router.push("signIn");
          sessionStorage.removeItem("TOKEN");
          this.$emit("closeMenu");
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  * {
    margin: 0;
  }
  #nav {
    .nav-mask {
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
          hr {
            background-color: rgba(9, 30, 66, 0.13);
            border: 0;
            height: 1px;
            margin: 0 16px;
          }
          .nav-header {
            margin: 0 15px;
            color: #6b778c;
            position: relative;
            line-height: 40px;
            height: 40px;
            margin-top: 0;
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

          .nav-body {
            text-align: left;
            width: 100%;
            margin: 6px 0 12px;
            ul {
              list-style: none;
              width: 100%;
              padding: 0;
              li {
                width: 100%;
                color: #172b4d;
                font-weight: bold;
                padding: 6px 0;
                p {
                  padding: 0 16px;
                }
                &:hover {
                  background: #026aa7;
                  color: #fff;
                  cursor: pointer;
                }
              }
            }
          }

          .nav-footer {
            width: 100%;
            color: #172b4d;
            font-weight: bold;
            padding: 6px 0;
            margin: 6px 0 12px;
            p {
              height: 100%;
              padding: 0 16px;
            }
            &:hover {
              background: #026aa7;
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
