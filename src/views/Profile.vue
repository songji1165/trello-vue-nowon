<template>
  <div class="profile-container">
    <div>
      <div>
        <a class="profile-image" @click="changeClick">
          <span
            class="profile-image-initials"
            v-show="selectedType == 'initials'"
          >{{userInfo.initials}}</span>
          <img class="profile-image-picture" :src="url" v-show="selectedType == 'picture'">
          <span class="profile-image-change-text">Change Avatar</span>
        </a>
      </div>
      <div v-show="changeAvatar" class="change-avatar-container">
        <div class="change-avatar-header">
          <span>Change Avatar</span>
          <i class="fa fa-times change-avatar-header-icon" @click="closeChange"></i>
        </div>
        <div>
          <div class="change-avatar-content">
            <div
              v-show="uploadedImage"
              class="avatar-option-container"
              @click="selectAvatar('picture')"
            >
              <img class="picture" :src="url">
              <span class="text">
                Uploaded Picture
                <i
                  v-show="selectedType == 'picture'"
                  class="fa fa-check check-icon"
                ></i>
              </span>
            </div>
            <hr v-show="uploadedImage">

            <div class="avatar-option-container" @click="selectAvatar('initials')">
              <span class="picture">
                <span class="no-avatar-initials">{{userInfo.initials}}</span>
              </span>
              <span class="text">
                Initials(no avatar)
                <i
                  v-show="selectedType == 'initials'"
                  class="fa fa-check check-icon"
                ></i>
              </span>
            </div>
            <hr>

            <div class="upload-container" @click="uploadImage">
              <i class="fa fa-paperclip upload-icon"></i>
              <span>Upload a new picture</span>
              <input class="hide" ref="uploader" type="file" @change="changeImage($event)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-show="!edit">
        <h1 class="full-name">
          {{userInfo.fullName}}
          <span
            class="user-name"
          >{{ userInfo.userName ? '@' + userInfo.userName : '' }}</span>
        </h1>
        <a class="editBtn" @click="editBtn">
          <i class="fa fa-pen editIcon"></i>
          Edit profile
        </a>
      </div>
      <div class="profile-form" v-show="edit">
        <div>
          <label>Full Name</label>
          <input type="text" v-model="editInfo.fullName">
        </div>
        <div>
          <label>Username</label>
          <input type="text" v-model="editInfo.userName">
        </div>
        <div>
          <label>Initials</label>
          <input type="text" v-model="editInfo.initials">
        </div>
        <div>
          <label>
            Bio
            <span class="quiet">(optional)</span>
          </label>
          <input type="text">
        </div>
        <div>
          <input @click="save" type="button" value="Save" class="primary">
          <input @click="cancle" type="button" value="Cancle">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      userInfo: {
        fullName: "",
        userName: "",
        initials: "",
        bio: ""
      },
      editInfo: {
        fullName: "",
        userName: "",
        initials: "",
        bio: ""
      },
      edit: false,
      changeAvatar: false,
      uploadedImage: false,
      url: null,
      selectedType: "initials"
    };
  },
  created: function() {
    this.userInfo = {
      fullName: "Jay",
      userName: "user76246352",
      initials: "달",
      bio: ""
    };
  },
  methods: {
    editBtn() {
      this.editInfo = { ...this.userInfo };
      this.edit = true;
    },
    save() {
      this.userInfo = { ...this.editInfo };
      this.edit = false;
    },
    cancle() {
      this.edit = false;
    },
    changeClick() {
      this.changeAvatar = !this.changeAvatar;
    },
    closeChange() {
      this.changeAvatar = false;
    },
    uploadImage() {
      this.$refs.uploader.click();
    },
    changeImage(event) {
      this.uploadedImage = event.target.files[0];
      this.url = URL.createObjectURL(this.uploadedImage);
    },
    selectAvatar(selected) {
      this.selectedType = selected;
    }
  }
};
</script>

<style scoped lang="less">
hr {
  background-color: rgba(9, 30, 66, 0.13);
  border: 0;
  height: 1px;
  margin: 8px 0;
  padding: 0;
  width: 100%;
}

.profile-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  color: #172b4d;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}

.profile-form {
  label {
    font-weight: 700;
    line-height: 16px;
    margin-top: 16px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    border-radius: 3px;
    line-height: 20px;
    border: none;
    box-sizing: border-box;
  }

  input[type="text"] {
    background-color: #fafbfc;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    color: #172b4d;
    display: block;
    margin-bottom: 12px;
    padding: 8px 12px;
    width: 250px;
  }

  input[type="button"].primary {
    color: white;
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    color: #fff;
    padding-left: 24px;
    padding-right: 24px;
    &:hover {
      background-color: #519839;
      box-shadow: 0 1px 0 0 #3f6f21;
      color: #fff;
    }
  }

  input[type="button"] {
    background-color: #ebecf0;
    box-shadow: 0 1px 0 0 rgba(9, 30, 66, 0.13);
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    margin: 8px 4px 0 0;
    padding: 6px 12px;
    text-align: center;
    color: #172b4d;
    font-size: 14px;
    &:hover {
      background-color: #dfe1e6;
      box-shadow: 0 1px 0 0 rgba(9, 30, 66, 0.25);
    }
  }
}

.quiet {
  color: #6b778c;
}

.profile-image {
  background-color: #dfe1e6;
  border-radius: 25em;
  display: block;
  height: 85px;
  overflow: hidden;
  position: relative;
  width: 85px;
  cursor: pointer;
  color: #172b4d;

  margin-right: 24px;
}

.profile-image:hover {
  background-color: #c1c7d0;
}
.profile-image:hover .profile-image-change-text {
  display: block;
  text-decoration: underline;
}

.profile-image-initials {
  display: block;
  font-size: 34px;
  line-height: 85px;
  overflow: hidden;
  top: 0;
  height: 85px;
  width: 85px;
  z-index: 1;
}

.profile-image-picture {
  background-size: 85px 85px;
  border-radius: 3px;
  display: block;
  height: 85px;
  left: 0;
  object-fit: cover;
  top: 0;
  width: 85px;
  z-index: 2;
}

.profile-image-change-text {
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: #fff;
  display: none;
  height: 40px;
  line-height: 32px;
  right: 0;
  width: 100%;
  z-index: 3;
}

.profile-image-change-text,
.profile-image-initials {
  font-weight: 700;
  text-align: center;
  left: 0;
  position: absolute;
}

.change-avatar-container {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  overflow: hidden;
  position: absolute;
  margin-top: 16px;
  width: 304px;
  z-index: 70;
  -webkit-transform: translateZ(0);
}

.change-avatar-header {
  height: 40px;
  position: relative;
  margin-bottom: 8px;
  text-align: center;

  font-size: 14px;
  font-weight: 400;

  span {
    box-sizing: border-box;
    color: #6b778c;
    display: block;
    line-height: 40px;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    margin: 0 12px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
  }
}

.change-avatar-header-icon {
  color: #6b778c;
  padding: 10px 12px 10px 8px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  width: 20px;
  display: inline-block;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #172b4d;
  }
  vertical-align: bottom;
}

.change-avatar-content {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 12px 12px;
  color: #172b4d;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}

.upload-container {
  background-color: #ebecf0;
  font-weight: 700;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #dfe1e6;
  }
}

.upload-icon {
  margin-left: 4px;
  margin-right: 12px;
}

.avatar-option-container {
  border-radius: 3px;
  display: block;
  height: 40px;
  cursor: pointer;
  padding: 4px 0;
  position: relative;
  text-decoration: none;
  &:hover {
    background-color: #dfe1e6;
    .no-avatar-picture {
      background-color: #c1c7d0;
    }
  }

  .picture {
    border-radius: 25em;
    height: 40px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 40px;
    object-fit: cover;
    display: block;
    float: left;
    background-color: #dfe1e6;
    margin: 0 4px 4px 0;
    overflow: visible;
  }

  .text {
    line-height: 42px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 56px;
    text-decoration: underline;
  }
}

.no-avatar-initials {
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 40px;
  display: block;
  font-weight: 700;
  left: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: 0;
}

.check-icon {
  position: absolute;
  right: 10px;
  top: 16px;
  color: #42526e;
  font-size: 16px;
  line-height: 20px;
}

.hide {
  display: none;
}

.full-name {
  margin-bottom: 16px;
  font-size: 24px;
  color: #172b4d;
}

.editBtn {
  background-color: #ebecf0;
  box-shadow: 0 1px 0 0 rgba(9, 30, 66, 0.13);
  border: none;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 6px 12px;
  color: #42526e;
  height: 32px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: #dfe1e6;
    box-shadow: 0 1px 0 0 rgba(9, 30, 66, 0.25);
    border: none;
  }
}

.editIcon {
  margin-right: 8px;
}

.user-name {
  display: inline-block;
  font-size: 12px;
  color: #6b778c;
  padding: 0 6px 0 2px;
  position: relative;
  margin: 0 2px;
}
</style>