<template>
  <div id="header">
    <h1>
      <router-link to="/"><i class="fab fa-trello"></i>Trello</router-link>
    </h1>

    <div class="left-nav">
      <div>
        <router-link to="/">
          <Btn
          :btnIcon="btnIcon('home')">
          </Btn>
        </router-link>
      </div>
      <div>
      <router-link to="/">
        <Btn :btnName="btnName('Boards')">
            <span slot="btnIcon"><i class="fab fa-trello"></i></span>
            <!-- <span slot="btnTitle">Boards</span> -->
          </Btn>
      </router-link>
      </div>
      <div>
        <router-link to="/">
          <Btn
          >
          <span slot="btnTitle">
            <div class="search"> 
              <input type="text">
              <button><i class="fas fa-search"></i></button>
            </div>
          </span>
          </Btn>
        </router-link>
      </div>
    </div>

    <div class="right-nav">
      <div @click="openCreateMenu('Create')">
          <Btn
          :btnIcon="btnIcon('add')">
          </Btn>
          <Menu
          v-show="showCreateMenu"
          @closeMenu="closeCreateMenu"
          :nav-header="navHeader('Create')"
          :nav-body="createBody"
          >
          </Menu>
      </div>
      
      <div>
          <Btn
          :btnIcon="btnIcon('error_outline')">
          </Btn>
      </div>

      <div>
        <Btn
        :btnIcon="btnIcon('notifications_none')">
        </Btn>
      </div>

      <div @click="openUserMenu('USER')">
          <Btn
          :isBtnCircle="isBtnCircle"
          :btnIcon="btnIcon('person_outline')">
          </Btn>
          <Menu
          v-show="showUserMenu"
          @closeMenu="closeUserMenu"
          :nav-header="navHeader('USER')"
          :nav-body="userBody"
          :nav-footer="navFooter('Logout')"
          >
            <!-- <p slot="header">Create</p> -->
          </Menu>
      </div>

      <!-- <router-link to="/signin">signin</router-link>
      <router-link to="/signup">signup</router-link>
      <router-link to="/profile">profile</router-link> -->
    </div>
    
  </div>
</template>

<script>
  import Btn from '@/components/Button.vue';
  import Menu from '@/components/Hmenu.vue';

  export default {
    components :{Btn, Menu},
    data() {
      return {
        isBtnCircle:true,
        showCreateMenu:false,
        showUserMenu:false,
        createBody:['Create Boards...'],
        userBody:['Profile','Cards','Settings']
    }},
    methods:{
      openCreateMenu(){
        this.showCreateMenu = true
        this.showUserMenu = false
      },
      openUserMenu(){
        this.showUserMenu = true
        this.showCreateMenu = false
      },
      closeCreateMenu(){
        this.showCreateMenu = false
      },
      closeUserMenu(){
        this.showUserMenu = false
      },
      btnIcon(icon){
        return icon
      },
      btnName(title){
        return title
      },
      navHeader(title){
        return title  
      },
      navFooter(title){
        return title  
      },

    },
  };
</script>

<style lang="less" scoped>
  html,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

    a {
      line-height: 40px;
      box-sizing: border-box;
      color: #fff;
      font-weight: bold;

      &:focus,
      &:link {
        text-decoration: none;
      }
    }

   

    h1 {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      line-height: 40px;
      margin: 0;
      font-size: 30px;
      font-style:oblique;
      opacity: .5;

      i{
        font-size:.9em !important;
        line-height: 40px;
      }
      &:hover {
        opacity: .8;
    }
    }
   
  #header {
    padding: 1px;
    height: 40px;
    background: #026aa7;
    position: relative;
    box-sizing: border-box;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
    i{
      font-size: 20px;
    }
    .left-nav {
      float: left;
      div{
        float: left;
      }
      &:after {
      content: "";
      display: block;
      clear: both;
      }
      .search{
        position: relative;
        width: 150px;
        input{
          width: 150px;
          height: 32px;
          background:none;
          border:none;
          outline:none
        }
        button{
          line-height: 32px;
          position: absolute;
          right: 0;
          background: none;
          border: none;
          color: #fff
        }

      }
    }

    .right-nav {
      float: right;
      div{
        float: left;
      }
      &:after {
      content: "";
      display: block;
      clear: both;
    }
    }
  }


</style>
