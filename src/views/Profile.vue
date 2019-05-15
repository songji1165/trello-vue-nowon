<template>
  <div style="display:flex; justify-content: center;">
    <div v-show="edit" style="flex-direction:column; width:200px;">
      <div>
        <label>Full Name</label>
        <input style="width:100%;" type="text">
      </div>
      <div>
        <label>Username</label>
        <input style="width:100%;" type="text">
      </div>
      <div>
        <label>Initials</label>
        <input style="width:100%;" type="text">
      </div>
      <div>
        <label>Bio(optional)</label>
        <input style="width:100%;" type="text">
      </div>
      <div>
        <button
          style="color:white; background-color:green; border:1px solid green; margin:0px 35px 0px 5px; width:80px;"
        >Save</button>
        <button style="width:80px;" @click="cancle">Cancel</button>
      </div>
    </div>
    <div v-show="!edit" style="flex-direction:column;">
      <h1>
        Jay
        <span style="font-size:14px;">@user76246352</span>
      </h1>
      <a class="editBtn" @click="editBtn">Edit profile</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      edit: false
    };
  },
  methods: {
    editBtn() {
      this.edit = true;
    },
    cancle() {
      this.edit = false;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.editBtn {
  background-color: #dedede;
  padding: 5px 10px 5px 10px;
}

.editBtn:hover {
  background-color: grey;
}
</style>