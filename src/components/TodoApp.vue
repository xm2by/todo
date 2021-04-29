<template>
  <div class="todo-app-wrapper">
    <header class="title">TODO</header>
    <input-box @addTask="addTask"></input-box>
    <task
      :taskList="taskList"
      @completeTask="completeTask"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script>
import { createUuid, formatCurrentDate } from "../utils/index";
import InputBox from "./InputBox.vue";
import Task from "./Task.vue";
import { ref } from "vue";
export default {
  components: {
    InputBox,
    Task,
  },
  setup() {
    const taskList = ref([]);

    const addTask = (val) => {
      taskList.value.push({
        id: createUuid(),
        createDate: formatCurrentDate(),
        task: val,
        taskStatus: "uncomplete",
      });
    };

    const completeTask = (val) => {
      const targetIndex = taskList.value.findIndex((i) => i.id === val);
      const target = taskList.value[targetIndex];
      if (targetIndex > -1) {
        taskList.value.splice(targetIndex, 1, {
          ...target,
          taskStatus:
            target.taskStatus === "uncomplete" ? "completed" : "uncomplete",
        });
      }
    };

    const deleteTask = (val) => {
      const targetIndex = taskList.value.findIndex((i) => i.id === val);
      if (targetIndex > -1) {
        taskList.value.splice(targetIndex, 1);
      }
    };

    return {
      taskList,
      addTask,
      completeTask,
      deleteTask,
    };
  },
};
</script>

<style lang="less" scoped>
.todo-app-wrapper {
  width: 500px;
  margin: 40px auto;

  .title {
    margin-bottom: 16px;
    font-size: 40px;
    text-align: center;
  }
}
</style>
