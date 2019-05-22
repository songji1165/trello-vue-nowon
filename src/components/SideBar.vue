<template>
  <div id="sideBar">
    <div class="side-wrapper">
      <div class="side-header">
        {{ sideTitle }}
      </div>

      <div class="side-body">
        <ul>
          <li>
            <SideBtn>
              <p slot="btnIcon"><i class="fab fa-trello"></i></p>
              <p slot="btnTitle">About This Board</p>
              <p slot="btnSubTitle">Add a description to your board</p>
            </SideBtn>
          </li>

          <li>
            <SideBtn>
              <p slot="btnIcon"><i class="fab fa-trello"></i></p>
              <p slot="btnTitle">Change Background</p>
            </SideBtn>
          </li>

          <li>
            <SideBtn>
              <p slot="btnIcon"><i class="fas fa-search"></i></p>
              <p slot="btnTitle">Search Cards</p>
            </SideBtn>
          </li>

          <li>
            <SideBtn>
              <p slot="btnIcon"><i class="fas fa-sticky-note"></i></p>
              <p slot="btnTitle">Stickers</p>
            </SideBtn>
          </li>

          <li @click="openSideMore">
            <SideBtn>
              <p slot="btnIcon"><i class="fas fa-ellipsis-h"></i></p>
              <p slot="btnTitle">More</p>
            </SideBtn>
          </li>
        </ul>
      </div>

      <div class="side-more" v-show=""></div>
    </div>
  </div>
</template>

<script>
    import SideBtn from '@/components/SideBtn.vue'
  export default {
      comments:{SideBtn},
      data(){
        sideTitle:"Menu",

      },
      methods: {
          openSideMore(){

          }
      },
  };
</script>

<style></style>
