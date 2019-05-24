<template>
  <transition name="side">
    <div id="sideBar">
      <div class="side-wrapper">
        <div class="side-header">
          Menu
          <span class="closeIcon" @click.stop="clickCloseIcon">
            <i class="fas fa-times"></i
          ></span>
          <hr />
        </div>
        <div class="side-body">
          <ul>
            <li>
              <Btn :sideColor="sideColor">
                <span slot="btnIcon"><i class="fab fa-trello"></i></span>
                <span slot="btnTitle">About This Boards</span>
              </Btn>
            </li>

            <li>
              <Btn :sideColor="sideColor">
                <span class="icon" slot="btnIcon">
                <span class="selected-background"></span>
                </span>
                <span slot="btnTitle">Change Background</span>
              </Btn>
            </li>

            <li>
              <Btn
                :sideColor="sideColor"
                :btnIcon="btnIcon('search')"
                :btnName="btnName('Search Cards')"
              >
              </Btn>
            </li>

            <li @click="openSideMore">
              <Btn
                :sideColor="sideColor"
                :btnIcon="btnIcon('more_horiz')"
                :btnName="btnName('More')"
              >
              </Btn>
            </li>
          </ul>

          <transition name="sideMore">
          
          <div class="side-more" v-show="sideMore">
            <!-- <hr /> -->
            
            <span class="moreCloseIcon" @click.stop="clickCloseSideMore">
              <i class="material-icons" v-show="!!btnIcon">keyboard_arrow_left

                </i>
                </span>
            
            <ul>
              <li>
                <Btn
                  :sideColor="sideColor"
                  :btnIcon="btnIcon('settings')"
                  :btnName="btnName('Settings')"
                >
                </Btn>
              </li>
              <li>
                <Btn
                  :sideColor="sideColor"
                  :btnIcon="btnIcon('label')"
                  :btnName="btnName('Labels')"
                >
                </Btn>
              </li>
              <li>
                <Btn
                  :sideColor="sideColor"
                  :btnIcon="btnIcon('all_inbox')"
                  :btnName="btnName('Collections')"
                >
                </Btn>
              </li>
              <li>
                <Btn
                  :sideColor="sideColor"
                  :btnIcon="btnIcon('inbox')"
                  :btnName="btnName('Archived Items')"
                >
                </Btn>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                  <Btn
                  :sideColor="sideColor"
                  :btnName="btnName('Close Boards...')"
                >
                </Btn>
              </li>
            </ul>
            <hr />
            <ul>
              <li class="hoverNone">
                  <Btn
                  :sideColor="sideColor"
                  >
                  <div slot="btnTitle">
                    <p>Link to this board</p>
                    <p><input type="text" v-model="linkURL" /></p> 
                  </div>
                </Btn>
              </li>
            </ul>
          </div>
          </transition>
        </div>
        
      </div>
    </div>
  </transition>
</template>

<script>
  import Btn from "@/components/Button.vue";
  export default {
    components: { Btn },
    // props:["sideTitle"],
    data() {
      return {
        sideColor: true,
        sideMore: false,
        hoverNone:true
      };
    },
    methods: {
      clickCloseIcon(){
        return this.$emit('closeSide')
      },
      clickCloseSideMore(){
        this.sideMore =false
      },
      openSideMore() {
        this.sideMore = !this.sideMore;
        if (this.sideMore === true) {
        }
      },
      btnName(title) {
        return title;
      },
      btnIcon(icon) {
        return icon;
      }
    },
    computed: {
      linkURL() {
        return document.location.href;
      }
    }
  };
</script>

<style lang="less" scoped>
  @color: #172b4d;

  #sideBar {
    transition: all .1s ease-in;
    position: fixed;
    right: 0;
    top: 40px;
    width: 340px;
    height: 100%;
    box-shadow: 0 12px 24px -6px rgba(9, 30, 66, 0.25),
      0 0 0 1px rgba(9, 30, 66, 0.08);
    background: #f4f5f7;
    hr {
      background-color: rgba(9, 30, 66, 0.13);
      border: 0;
      height: 1px;
    }
    .side-wrapper{
      padding: 0 12px;
    }
    .side-header {
      /* margin: 0 15px; */
      color: @color;
      position: relative;
      line-height: 40px;
      height: 40px;
      margin-top: 10px;
      text-align: center;
      font-weight: bolder;
      .closeIcon {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
      }
    }

    .side-body {
      position: relative;
      text-align: left;
      /* padding: 10px 0; */
      ul {
        list-style: none;
        width: 100%;
        padding: 10px 0;
        li {
          width: 100%;
          color: @color;
          font-weight: bold;
          i {
            font-size: 20px;
          }
          .selected-background {
            width: 20px;
            height: 20px;
            margin: 12px 0;
            border-radius: 5px;
            display: inline-block;
            background: red;
            vertical-align: middle;
          }
          &:hover {
            background: rgba(9, 30, 66, 0.13);
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
      .side-more{
        transition: all .1s ease-in;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #f4f5f7;
        /* padding: 0 12px; */
        .moreCloseIcon {
        position: absolute;
        top: -48px;
        left: 0;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
        i{
          font-size: 28px
        }
      }
        ul{
          width: 100%;
        padding: 0;
        p{
          margin:12px 0;
          line-height:20px;
          width:100%;
        input{
          background: #fafbfc;
           width: 132%;
           line-height:20px;
           border: none;
          box-shadow: inset 0 0 0 2px #dfe1e6;
          border-radius: 5px;
          padding:8px 12px;
          font-size:14px;
          outline: none;
          &:focus{
            box-shadow: inset 0 0 0 2px #0079bf;
          }
        }
        }
        li.hoverNone:hover{
            cursor:unset;
            background:none
        }
        }

      }
    }
  }

.side-leave-active {
  transform: translateX(340px);
}
.side-enter{
  transform: translateX(340px);
  opacity: 0;
}
.side-enter-to{
  transform: translateX(0);
}

.sideMore-enter{
  transform: translateX(340px);
}
.sideMore-enter-to{
  transform: translateX(0);
}

.sideMore-leave-active{
  transform: translateX(340px);
}


</style>
