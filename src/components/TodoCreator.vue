<template>
  <div class="todo__creater">
    <input
      :name="name"
      type="text"
      :value="inputValue"
      @input="inputHandler"
      :placeholder="placeholder"
      class="todo__creater_input"
    />
    <button
      type="button"
      class="todo__creater_btn"
      v-on:click="addFunction"
      :disabled="!inputValue"
    >Создать</button>
  </div>
</template> 

<script>
export default {
  name: "TodoCreator",
  props: {
    inputValue: String,
    inputHandler: Function,
    addFunction: Function,
    placeholder: String,
    name: String
  }
};
</script>

<style lang="scss" scoped>
.todo {
  &__creater {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__creater_input {
    width: calc(100% - 100px);
    padding: 10px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #e5e5e5;
  }
  &__creater_btn {
    padding: 10px;
    font-weight: bold;
    background: aquamarine;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    width: 100px;
    box-sizing: border-box;
  }
}
</style>