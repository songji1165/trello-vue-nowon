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
            <span slot="btnName">Boards</i></span>
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
      <div>
            <Btn>
            <span slot="btnIcon">
              <i class="fas fa-plus"></i>
            </span>
            </Btn>
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
      <div @click="OpenModalUser()">
          <Btn
          :isBtnCircle="isBtnCircle"          
          >
              <span slot="btnIcon">
                  U
              </span>
            </Btn>
        </div>
      
      <div 
      class="modalUser"
      v-show="ModalUser">
        <ul>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/cardlist">Cards</router-link></li>
          <li>Settings</li>
          <li><router-link to="/signin">LogOut</router-link></li>
        </ul>
      </div>
      <!-- <router-link to="/signin">signin</router-link>
      <router-link to="/signup">signup</router-link>
      <router-link to="/profile">profile</router-link> -->
    </div>
  </div>
</template>

<script>
  import Btn from '@/components/Button.vue';

  export default {
    components :{Btn},
    data() {
      return {
        ModalUser:false,
        isBtnCircle:true

      }
    },
    methods:{
      OpenModalUser(){
        this.ModalUser = !this.ModalUser
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
      /* margin: 0 5px; */
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

      i{
        font-size:.9em !important;
        line-height: 40px;
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

    .modalUser{
        border: 1px solid red;
        position:absolute;
        right:10px;
        top:42px;
        width:304px;
      }

    }
  }
</style>
