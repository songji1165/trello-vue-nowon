<template>
  <div class="header">
    <div class="left-logo">
      <h1>
        <router-link to="/">Trello</router-link>
      </h1>
    </div>
    <div class="right-btn">
      <router-link to="/signin">signin</router-link>
      <router-link to="/signup">signup</router-link>
      <router-link to="/profile">profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.header {
  height: 40px;
  background: #026aa7;
}
.header::after {
  content: "";
  display: block;
  clear: both;
}
.left-logo {
  float: left;
}

.right-btn {
  float: right;
  width: 50%;
  text-align: right;
}

h1 {
  margin: 0;
}
a {
  line-height: 40px;
  margin: 0 5px;
  box-sizing: border-box;
  color: #fff;
  font-weight: bold;
}
a:focus,
a:link {
  text-decoration: none;
}

.right-btn a {
  width: 100px;
  display: inline-block;
  text-align: center;
}

.right-btn a:hover {
  background: #d9d9d9ce;
  color: #333;
}
</style>