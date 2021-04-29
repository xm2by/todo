<template>
  <div class="task-wrapper">
    <task-item
      v-for="item in taskList"
      :key="item.id"
      :info="item"
      @completeTask="completeTask"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
  props: {
    taskList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const completeTask = (val) => {
      context.emit("completeTask", val);
    };

    const deleteTask = (val) => {
      context.emit("deleteTask", val);
    };

    return {
      completeTask,
      deleteTask,
    };
  },
};
</script>

<style lang="less" scoped>
.task-wrapper {
  width: 500px;
  overflow: hidden;
}
</style>
