import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const state = {
//   id: '',
//   errorState : '',
//   isAuth: false
// }

const store = new Vuex.Store({
  state: {
    backgroundList: [
      {
        check: false,
        background: "rgb(0, 121, 191)"
      },
      {
        check: false,
        background: "rgb(255, 153, 204)"
      },
      {
        check: false,
        background: "rgb(204, 153, 255)"
      },
      {
        check: false,
        background: "rgb(210, 144, 52)"
      },
      {
        check: false,
        background: "rgb(81, 152, 57)"
      },
      {
        check: false,
        background: "rgb(176, 70, 50)"
      }
    ],
    boardList: [
      {
        title: "qw",
        background: {
          // check: false,
          background: "rgb(0, 121, 191)"
        }
      }
    ]
  },
  mutations: {
    BOARD: (state, payload) => {
      var context = {
        title: payload.title,
        background: {
          background: payload.background
        }
      };
      console.log("payload", payload);
      state.boardList.push(context);
    }
  }
});

export default store;
