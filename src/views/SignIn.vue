<template>
  <div>
    <div id="sign-in">
      <h1>Log in to Trello</h1>
      <router-link to="/signup">or create an account</router-link>
      <div>
        <p>
          Email
          <span>(or username)</span>
        </p>
        <input
          type="email"
          placeholder="e.g.,calrissian@cloud.ci"
          v-model="id"
          ref="idData"
          @keyup.enter="nextInput()"
          v-bind:class="{err:idData}"
        >
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          placeholder="e.g.,***************"
          v-model="pwd"
          @keyup.enter="clickLogin"
          ref="pwdData"
          v-bind:class="{err:pwdData}"
        >
      </div>
      <button @click="clickLogin" class="button">LogIn</button>
      <button @click="fnOpen" class="button">Open</button>
    </div>
    <!-- 카드 모달 테스트 -->
    <card-modal :visible="card.visible" :title="card.title" @close="fnClose">
      <div>
        <li>데이터1</li>
        <li>데이터2</li>
        <li>데이터3</li>
      </div>
    </card-modal>
  </div>
</template>
<script>
import cardModal from "@/components/CardModal.vue";
export default {
  components: {
    cardModal
  },
  data: function() {
    return {
      id: "",
      pwd: "",
      idData: false,
      pwdData: false,
      card: {
        visible: false,
        title: "투두"
      }
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
      const rexEng = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return rexEng.test(character);
    },
    fnOpen: function() {
      this.card.visible = true;
    },
    fnClose: function() {
      this.card.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
@shadow: #b8b8b8;
.boxshadow {
  box-shadow: 2px 3px 5px @shadow;
}
a:link {
  color: #298fca;
  font-size: 18px;
  text-decoration: underline;
}
a:visited {
  color: #298fca;
  text-decoration: underline;
}
a:hover {
  color: #666;
  text-decoration: none;
}
h1 {
  text-align: center;
}
#sign-in {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    span {
      color: gray;
    }
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
    background-color: #61bd4f;
    box-shadow: 0 2px 0 #3f6f21;
  }
  .btnActive {
    background: #026aa7;
    .boxshadow;
  }
}
</style>
