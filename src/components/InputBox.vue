<template>
  <div class="input-box-wrapper">
    <input
      class="input"
      v-model="inputVal"
      placeholder="添加任务"
      @keypress="handleKeyPress"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    const inputVal = ref("");

    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === "ENTER") {
        context.emit("addTask", inputVal.value);
        inputVal.value = "";
      }
    };

    return {
      inputVal,
      handleKeyPress,
    };
  },
};
</script>

<style lang="less" scoped>
.input-box-wrapper {
  margin-bottom: 24px;

  .input {
    box-sizing: border-box;
    width: 500px;
    height: 36px;
    padding: 0 12px;
    border: 2px solid #e5e5e5;
    border-radius: 2px;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: #999;
    }
  }
}
</style>
