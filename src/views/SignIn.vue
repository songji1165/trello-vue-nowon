<template>
  <div>
    <h1>Log in to Trello</h1>
    <div>
      <label>내 아이디</label>
      <input
        type="email"
        placeholder="ID"
        v-model="id"
        ref="idData"
        @keyup.enter="nextInput()"
        v-bind:class="{err:idData}"
      >
    </div>
    <div>
      <label>비밀 번호</label>
      <input
        type="password"
        placeholder="Password"
        v-model="pwd"
        @keyup.enter="clickLogin"
        ref="pwdData"
        v-bind:class="{err:pwdData}"
      >
    </div>
    <button @click="clickLogin" class="button">로그인</button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  components: {},
  data: function() {
    return {
      id: "",
      pwd: "",
      idData: false,
      pwdData: false
    };
  },
  watch: {
    id: function() {
      this.reset();
    },
    pwd: function() {
      this.reset();
    }
  },
  methods: {
    reset: function() {
      if (this.idData) this.idData = false;
      if (this.pwdData) this.pwdData = false;
    },
    clickLogin: function() {
      if (this.id == "") {
        this.$refs.idData.focus();
        this.idData = true;
        alert("아이디 값이 없습니다.");
        return;
      }
      if (this.pwd == "") {
        this.$refs.pwdData.focus();
        this.pwdData = true;
        alert("비밀번호 값이 없습니다.");
        return;
      }
      if (!this.validateEng(this.id)) {
        this.$refs.idData.focus();
        this.idData = true;
        alert("아이디 형식이 옳지 않습니다");
        return;
      }
      if (!this.validatePassword(this.pwd)) {
        this.$refs.pwdData.focus();
        this.pwdData = true;
        alert("비밀번호 형식이 옳지않습니다.");
        return;
      }
      alert(this.id + "," + this.pwd);
      const param = {
        id: this.id,
        pwd: this.pwd
      };
    },
    nextInput: function() {
      this.$refs.pwdData.focus();
    },
    validatePassword: function(character) {
      const rexPwd = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
      return rexPwd.test(character);
      //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
    },
    validateEng: function(character) {
      const rexEng = /^[a-zA-Z0-9]{4,12}$/;
      return rexEng.test(character);
    }
  }
};
</script>

<style scoped lang="less">
.button {
  background: rgba(30, 22, 54, 0.6);
  border-radius: 5%;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(30, 22, 54, 0.4);
  }
}
.err {
  border: 2px solid red;
}
input {
  height: 30px;
  width: 200px;
  margin-left: 20px;
  text-indent: 8px;
}
div {
  margin: 15px;
  text-align: center;
}
</style>