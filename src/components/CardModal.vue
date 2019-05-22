<template>
  <div v-if="visible" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <button class="modal-close-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </button>
          <span>{{title}}</span>
        </div>
        <div class="modal-body">
          <table style="width:100%">
            <tr>
              <td class="dataField">
                <div>
                  <i class="fas fa-stream"></i>
                  Description
                </div>
                <div>
                  <textarea style="width:80%" placeholder="Add a more detailed description..."/>
                </div>
                <div>
                  <i class="far fa-comment"></i>
                  Add Comment
                </div>
                <div>
                  <textarea style="width:80%" placeholder="Write a comment..."/>
                </div>
                <button>Save</button>
                <div>
                  <i class="fas fa-list-ul"></i>
                  Activity
                  <button>Hide Details</button>
                </div>
                <slot></slot>
              </td>
              <td class="buttonField">
                <div>ADD TO CARD</div>
                <div>
                  <button>
                    <i class="far fa-user"></i>Members
                  </button>
                </div>
                <div>
                  <button>
                    <i class="fas fa-tag"></i>Labels
                  </button>
                </div>
                <div>
                  <button>
                    <i class="fas fa-cubes"></i>Checklist
                  </button>
                </div>
                <div>
                  <button>
                    <i class="far fa-clock"></i>Due Date
                  </button>
                </div>
                <div>
                  <button>
                    <i class="fas fa-paperclip"></i>Attachment
                  </button>
                </div>
                <div>POWER-UPS</div>
                <div>
                  <button>Get Power-Ups</button>
                </div>
                <div>ACTIONS</div>
                <div>
                  <button>
                    <i class="fas fa-arrow-right"></i>Move
                  </button>
                </div>
                <div>
                  <button>
                    <i class="far fa-copy"></i>Copy
                  </button>
                </div>
                <div>
                  <button>
                    <i class="far fa-eye"></i>Watch
                  </button>
                </div>
                <div>
                  <button>
                    <i class="fas fa-archive"></i>Archive
                  </button>
                </div>
                <div>
                  <button>
                    <i class="fas fa-share-alt"></i>Share
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 768px;
  z-index: 25;
  margin: 0px auto;
  background-color: #f4f5f7;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  background-color: #dddddd;
  height: 32px;
  position: relative;
  z-index: 1;
  span {
    padding-left: 5px;
    line-height: 32px;
    height: 32px;
  }
}
.modal-body {
  padding: 0px 20px 30px;
  margin: 20px 0;
  .dataField {
    width: 70%;
    div {
      padding: 10px;
    }
  }
  .buttonField {
    width: 30%;
    div {
      padding: 5px 0px 5px 0px;
    }
  }
}
.modal-default-button {
  float: right;
}
.modal-close-button {
  border: none;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  overflow: hidden;
  padding: 4px;
  margin: 4px;
  width: 32px;
  z-index: 2;
}
i {
  margin-right: 5px;
}
</style>