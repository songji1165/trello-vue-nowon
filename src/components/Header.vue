<template>
  <div id="header">
    <h1>
      <router-link to="/"><i class="fab fa-trello"></i>Trello</router-link>
    </h1>

    <div class="left-nav">
      <div>
        <router-link to="/">
          <Btn>
          <span slot="btnIcon">
            <i class="fas fa-home"></i>
          </span>
          </Btn>
        </router-link>
      </div>
      <div>
      <router-link to="/">
        <Btn>
            <span slot="btnIcon"><i class="fab fa-trello"></i></span>
            <span slot="btnName">Boards</span>
          </Btn>
      </router-link>
      </div>
      <div>
        <router-link to="/">
          <Btn>
          <span slot="btnName">
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
          <Btn>
            <span slot="btnIcon" >
              <i class="fas fa-plus"></i>
            </span>
          </Btn>
          <Menu
          v-show="showCreateMenu"
          @closeMenu="closeCreateMenu"
          >
            <p slot="header">Create</p>
            <div slot="body" class="create-body">
              <ul>
                <li>
                    <p>Create Board...</p>
                </li>
              </ul>
            </div>
          </Menu>
      </div>
      
      <div>
          <Btn>
              <span slot="btnIcon">
                  <i class="far fa-question-circle"></i>
              </span>
          </Btn>
      </div>

      <div>
        <Btn>
          <span slot="btnIcon">
              <i class="far fa-bell"></i>
          </span>
        </Btn>
      </div>

      <div @click="openUserMenu('USER')">
          <Btn
          :isBtnCircle="isBtnCircle">
            <span slot="btnIcon">
                U
            </span>
          </Btn>
          <Menu
          v-show="showUserMenu"
          @closeMenu="closeUserMenu"
          >
            <p slot="header">Create</p>
            <div slot="body" class="create-body">
              <ul>
                <li>
                    <p>Profile</p>
                </li>
                <li>
                    <p>Cards</p>
                </li>
                <li>
                    <p>Settings</p>
                </li>
              </ul>
            </div>
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
  import Menu from '@/components/Menu.vue';

  export default {
    components :{Btn, Menu},
    data() {
      return {
        isBtnCircle:true,
        showCreateMenu:false,
        showUserMenu:false
      }
    },
    methods:{
      openCreateMenu(){
        this.showCreateMenu = true
      },
      openUserMenu(){
        this.showUserMenu = !this.showUserMenu
      },
      closeCreateMenu(){
        console.log('create')
        this.showCreateMenu = false
      },
      closeUserMenu(){
        this.showUserMenu = false
      }
    }
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
      font-size: 16px;
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
          right: -25px;
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

.create-body{
  width: 100%;
  ul{
      list-style: none;
      width: 100%;
      padding: 0;
      li{
        width:100%;
        color: #172b4d;
        font-weight:bold;
        padding: 6px 0;
        p{
          padding:0 16px;
        }
        &:hover{
          background: #026aa7;
          color:#fff;
          cursor: pointer;
        }
      }
    }
}
</style>
