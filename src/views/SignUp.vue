<template>
  <div class="sign-in">
    <h1>Create a Trello Account</h1>
    <div>
      <p>Name</p>
      <input
        type="text"
        placeholder="Eng, Turanga Leela"
        v-model="name"
        autofocus
        ref="nameInput"
        @change="enterName"
        :class="{err:errName}"
      >
    </div>
    <div>
      <p>Email</p>
      <input
        type="email"
        placeholder="Eng, abc@abc.com"
        v-model="email"
        @change="enterEmail"
        ref="emailInput"
        :class="{err:errEmail}"
      >
    </div>
    <div>
      <p>Password</p>
      <input
        type="password"
        placeholder="Eng"
        v-model="pwd"
        ref="pwdInput"
        @change="enterPwd"
        :class="{err:errPwd}"
      >
      <p v-show="alertPwd" class="alert-pwd">비밀번호는 6~12자리로 설정해주세요.</p>
    </div>
    <div>
      <button @click="handleClickSingIn" ref="signIn" :class="{btnActive:btnActive}">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      pwd: null,
      errName: false,
      errEmail: false,
      errPwd: false,
      alertPwd: false
      // btnActive:false
    };
  },
  methods: {
    enterName() {
      const reName = /[^a-zA-z\s]{2,10}/;
      if (!reName.test(this.name) && this.name != null) {
        this.errName = false;
        this.$refs.emailInput.focus();
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
        this.$refs.pwdInput.focus();
        return true;
      } else {
        this.errEmail = true;
        return false;
      }
    },
    enterPwd() {
      const rePwd = /^[A-Za-z0-9]{6,12}$/;
      if (rePwd.test(this.pwd) && this.pwd != null) {
        this.alertPwd = false;
        this.errPwd = false;
        return true;
      } else {
        this.errPwd = true;
        this.alertPwd = true;
        return false;
      }
    },
    handleClickSingIn() {
      if (this.enterName() && this.enterEmail() && this.enterPwd()) {
        console.log("가입 성공");
      }
      console.log("실패");
    }
  },
  computed: {
    btnActive() {
      if (!!this.errName && !!this.errEmail && !!this.errPwd) {
        console.log(this.name);
        return true;
      } else {
        return false;
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
    }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 5%;
}
.sign-in {
  width: 500px;
  margin: 0 auto;
}
.sing-in > div {
  margin: 10px 0;
  padding: 5px 0;
}
.err {
  border: 3px solid red;
  box-shadow: 0 3px 5px #b8b8b8;
}
p {
  text-align: left;
  font-weight: bold;
  margin-bottom: 0;
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
  border: 1px solid #d9d9d9;
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
  box-shadow: 0 3px 5px #b8b8b8;
}
</style>