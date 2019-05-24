<template>
  <div id="sign-in">
    <h1>Create a Trello Account</h1>
    <div>
      <p>Name</p>
      <input
        type="text"
        placeholder="Eng"
        v-model="name"
        autofocus
        @change="enterName"
        :class="{err:errName}"
      />
    </div>
    <div>
      <p>Email</p>
      <input
        type="email"
        placeholder="Eng, abc@abc.com"
        v-model="email"
        @change="enterEmail"
        :class="{err:errEmail}"
      />
    </div>
    <div>
      <p>Password</p>
      <input
        type="password"
        placeholder="8~15"
        v-model="pwd"
        @change="enterPwd"
        :class="{err:errPwd}"
      />
      <p v-show="alertPwd" class="alert-pwd">
        비밀번호는 특수문자,문자,숫자 포함 형태의 8~15자리 이내로 설정해주세요
      </p>
    </div>
    <div>
      <button
        @click="handleClickSingIn"
        ref="signIn"
        :class="{btnActive:btnActive}"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        name: null,
        email: null,
        pwd: null,
        errName: false,
        errEmail: false,
        errPwd: false,
        alertPwd: false,
        btnActive: false
      };
    },
    methods: {
      enterName() {
        const reName = /[^a-zA-z\s]{2,10}/;
        if (!reName.test(this.name) && this.name != null) {
          this.errName = false;
          return true;
        } else {
          this.errName = true;
          return false;
        }
      },
      enterEmail() {
        const reEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (reEmail.test(this.email) && this.email != null) {
          this.errEmail = false;
          return true;
        } else {
          this.errEmail = true;
          return false;
        }
      },
      enterPwd() {
        const rePwd = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
        if (rePwd.test(this.pwd) && this.pwd != null) {
          this.alertPwd = false;
          this.errPwd = false;
          
          return true
        } else {
          this.errPwd = true;
          this.alertPwd = true;
          return false;
        }
      },
      handleClickSingIn() {
        if (this.enterName() && this.enterEmail() && this.enterPwd()) {
          axios.post(`/auth/register`,{
            name: this.name,
            email:this.email,
            password:this.pwd
          }).then(res=>this.$router.push('/'))
        } else {
          console.log("실패");
        }
      },
      isbtnActive() {
        if (this.enterName() && this.enterEmail() && !this.errPwd) {
          this.btnActive = true;
        } else {
          this.btnActive = false;
        }
      }
    },
    watch: {
      name() {
        this.errName = false;
      },
      email() {
        this.errEmail = false;
      },
      pwd() {
        this.errPwd = false;
        this.alertPwd = false;
        this.isbtnActive();
      }
    }
  };
</script>

<style lang="less" scoped>
  @shadow: #b8b8b8;
  .boxshadow {
    box-shadow: 2px 3px 5px @shadow;
  }

  h1 {
    text-align: center;
  }

  #sign-in {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    div {
      margin: 10px 0;
      padding: 5px 0;
    }
    .err {
      border: 3px solid red;
      .boxshadow;
    }
    p {
      text-align: left;
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    p.alert-pwd {
      color: red;
    }
    input,
    button {
      width: 500px;
      height: 40px;
      font-size: 1.2rem;
      padding-left: 5%;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid @shadow;
    }
    button {
      margin: 20px 0;
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      padding: 0;
      border: none;
      cursor: pointer;
    }
    .btnActive {
      background: #026aa7;
      .boxshadow;
    }
  }
</style>
