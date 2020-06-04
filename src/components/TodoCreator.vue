<template>
  <div class="todo__creater">
    <input
      type="text"
      :value="getTodoValue"
      @input="newTodoHandler"
      placeholder="название заметки"
      class="todo__creater_input"
    />
    <button type="button" class="todo__creater_btn" v-on:click="addTodo">Создать</button>
  </div>
</template> 

<script>
export default {
  name: "TodoCreator",
  props: {
    getTodoValue: String,
    newTodoHandler: Function,
    addTodo: Function
  }
};
</script>

<style scoped>
.todo__creater {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>