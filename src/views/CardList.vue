<template>
        <section class="component-card-box">
            <div @click="clickOpenSideBar">open</div>
          <div class="component-card-wrap">
            <Side-bar v-show="showSideBar" @closeSide="closeSide"></Side-bar>
          </div>
        </section>
      </template>
      
      <script>
        import SideBar from "@/components/SideBar.vue";
        export default {
          name: "Card",
          components: { SideBar },
          data() {
            return {
              showSideBar: false
            };
          },
          methods: {
            clickOpenSideBar(){
                this.showSideBar= true
            },
              closeSide(){
                  this.showSideBar=false
              }
          },
        };
      </script>
      
      <style>
        .side-bar {
          /* position: fixed;
              right: 0;
              top: 40px; */
        }
        /* card layout */
        /* .component-card-box {min-height:50px;border-radius:5px;background:#ddd;}
      .component-card-wrap {padding:10px;} */
      </style>
      