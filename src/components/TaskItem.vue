<template>
  <div class="task-item-wrapper">
    <div class="check-box" @click="completeTask">
      <i
        class="iconfont"
        :class="[isCompleted ? 'icon-finish' : 'icon-circle']"
      ></i>
    </div>
    <div class="task-content" :class="[isCompleted ? 'complete' : '']">
      {{ info.task }}
    </div>
    <i class="delete-btn iconfont icon-delete" @click="deleteTask"></i>
  </div>
</template>

<script>
import { toRefs, computed } from "vue";
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const { info } = toRefs(props);

    const isCompleted = computed(() => info.value.taskStatus === "completed");

    const completeTask = () => {
      context.emit("completeTask", info.value.id);
    };

    const deleteTask = () => {
      context.emit("deleteTask", info.value.id);
    };

    return {
      isCompleted,
      completeTask,
      deleteTask,
    };
  },
};
</script>

<style lang="less" scoped>
.task-item-wrapper {
  box-sizing: border-box;
  position: relative;
  height: 36px;
  padding: 0 8px;
  margin-bottom: 16px;
  border-radius: 2px;
  font-size: 16px;
  color: #333;
  background: #eee;

  .check-box {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);

    .icon-finish {
      color: #7b8dd8;
    }
  }

  .task-content {
    padding: 0 20px;
    line-height: 36px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &.complete {
      color: #999;
      text-decoration: line-through;
    }
  }

  .delete-btn {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
}
</style>
