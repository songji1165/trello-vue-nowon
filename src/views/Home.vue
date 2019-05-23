<template>
  <div class="home">
    <div class="home-card-container">
      <div class="home-card-title">
        <i class="fa fa-user home-card-title-icon"></i>
        Boards
      </div>
      <div
        class="home-card"
        v-for="(board, index) in boardList"
        :key="index"
        :style="board.background"
      >{{board.title}}</div>
      <div class="home-card addNew" @click="addNewOpen">
        <span>Create new board...</span>
      </div>
    </div>
    <div class="addNewModal-container" v-show="addNew">
      <div class="addNewModal">
        <div class="form-container">
          <div
            class="board-title"
            :style="selectedBackground"
            :class="{backgroundImage:selectedImage}"
          >
            <button type="button" class="closeButton" @click="addNewClose">
              <i class="fa fa-times"></i>
            </button>
            <div>
              <input
                v-model="boardTitle"
                placeholder="Add board title"
                class="title-input"
                @keyup.enter="createBoard"
              >
            </div>
          </div>
          <ul class="background-grid">
            <li class="background-grid-item" v-for="(item, index) in backgroundList" :key="index">
              <button
                class="background-grid-trigger"
                :style="makeStyle(item)"
                @click="backgroundSelect(item, index)"
              >
                <i v-show="item.check" class="fa fa-check"></i>
                <i v-show="index == 8" class="fa fa-ellipsis-h"></i>
              </button>
            </li>
          </ul>
        </div>
        <button
          class="create-button"
          @click="createBoard"
          :disabled="!boardTitle"
          :class="{disabled:!boardTitle}"
        >Create Board</button>
      </div>
      <div class="blind" @click="addNewClose"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data: function() {
    return {
      addNew: false,
      boardTitle: "",
      backgroundList: [
        {
          check: true,
          type: "image",
          background:
            "https://images.unsplash.com/photo-1557771810-22b35659143c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9"
        },
        {
          check: false,
          type: "image",
          background:
            "https://images.unsplash.com/photo-1557770035-b7a607235fc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9"
        },
        {
          check: false,
          type: "image",
          background:
            "https://images.unsplash.com/photo-1557787108-f84b241bf836?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9"
        },
        {
          check: false,
          type: "image",
          background:
            "https://images.unsplash.com/photo-1557785345-57abc096516b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9"
        },
        {
          check: false,
          type: "color",
          background: "rgb(0, 121, 191)"
        },
        {
          check: false,
          type: "color",
          background: "rgb(210, 144, 52)"
        },
        {
          check: false,
          type: "color",
          background: "rgb(81, 152, 57)"
        },
        {
          check: false,
          type: "color",
          background: "rgb(176, 70, 50)"
        },
        {
          check: false
        }
      ],
      boardList: [],
      activeCheckIndex: 0,
      selectedImage: true,
      selectedBackground: {}
    };
  },
  beforeMount: function() {
    this.selectedBackground = this.makeStyle(
      this.backgroundList[this.activeCheckIndex]
    );
  },
  methods: {
    addNewOpen() {
      this.addNew = true;
    },
    addNewClose() {
      this.addNew = false;
    },
    backgroundSelect(item, idx) {
      if (idx == 8) return;
      this.selectedImage = false;
      if (item.type == "image") this.selectedImage = true;

      this.backgroundList[this.activeCheckIndex].check = false;
      this.activeCheckIndex = idx;
      item.check = true;

      this.selectedBackground = this.makeStyle(item);
    },
    createBoard() {
     this.boardList.push({
        title: this.boardTitle,
        background: this.selectedBackground
      });
      this.$router.push('/cardList')
    },
    makeStyle(item) {
      if (item.type == "image") {
        return { backgroundImage: `url(${item.background})` };
      } else {
        return { backgroundColor: item.background };
      }
    }
  }
};
</script>

<style>
.home {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.home-card-container {
  display: flex;
  flex-wrap: wrap;
  width: 672px;
}

.home-card-title {
  font-weight: bold;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
}

.home-card-title-icon {
  margin-right: 12px;
}

.home-card {
  border-radius: 3px;
  display: flex;
  margin: 0px 4px 16px 4px;
  padding: 8px;
  width: 200px;
  height: 96px;
  vertical-align: middle;
  border: 1px solid black;
  cursor: pointer;
  font-weight: bold;

  border: none;
}

.home-card:not(.addNew) {
  background-size: cover;
  background-position: 50%;
  color: #fff;
  line-height: 20px;
  position: relative;
  text-decoration: none;
}

.home-card.addNew {
  justify-content: center;
  align-items: center;
  color: #6b778c;

  background-color: rgba(9, 30, 66, 0.08);
}

.blind {
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 15;
  overflow-x: hidden;
}

.addNewModal-container {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  overflow-x: hidden;
}

.addNewModal {
  background-color: transparent;
  border: none;
  margin-top: 24px;
  padding: 24px;
  width: auto;

  border-radius: 2px;
  display: block;
  margin: 48px 0 80px;
  overflow: hidden;
  position: relative;
  z-index: 25;
}

.form-container {
  display: flex;
}

.board-title {
  background-color: #fff;
  box-sizing: border-box;
  height: 96px;
  margin: 0;
  padding: 10px 10px 10px 16px;
  position: relative;
  width: 296px;
  border-radius: 3px;
  display: block;
  background-size: cover;
  background-position: 50%;
  color: #fff;
  line-height: 20px;
  text-decoration: none;
}

.backgroundImage:before {
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
}

.closeButton {
  float: right;
  position: relative;
  right: -2px;
  top: -2px;
  z-index: 2;
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: white;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  min-height: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.title-input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 0;
  outline: 0;
  padding: 2px 8px;
  position: relative;
  left: -8px;
  box-shadow: none;
  width: calc(100% - 18px - 16px);
}

.title-input::placeholder {
  color: #bbbbbb;
}

.title-input:focus {
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  outline: 0;
}
.title-input:hover {
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  outline: 0;
}

.background-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  height: 96px;
  margin-left: 8px;
  width: 100px;
}

.background-grid-item {
  height: 28px;
  width: 28px;
  margin-bottom: 6px;
}

.background-grid-trigger {
  background: none;
  background-color: #fff;
  background-position: 50%;
  background-size: cover;
  box-shadow: none;

  align-items: center;
  border-radius: 3px;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  min-height: 0;
  padding: 0;
  position: relative;
  line-height: 0;
  width: 100%;
  cursor: pointer;
  border: none;
}

.background-grid-trigger {
  background-color: rgba(0, 0, 0, 0.4);
}

.background-grid-trigger:focus:before {
  background-color: rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 3px;
}
.background-grid-trigger:hover:before {
  background-color: rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 3px;
}

.create-button {
  background-color: #5aac44;
  box-shadow: 0 1px 0 0 #3f6f21;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  line-height: 20px;
  margin: 8px 4px 0 0;
  padding: 6px 12px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 14px;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
}

.disabled {
  background-color: #ebecf0;
  box-shadow: none;
  border: none;
  color: #a5adba;
  cursor: not-allowed;
}
</style>