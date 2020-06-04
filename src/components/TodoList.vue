<template>
  <div class="todo__wrapper">
    <h2 class="todo__counter">{{ "Количество заметок: " + todos.length }}</h2>
    <div class="todo__list">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :tasksList="todo.tasksList"
      />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  props: {
      todos: Array
  },
  components: {
    Todo
  }
};
</script>

<style scoped>
.todo__counter {
    margin: 20px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #e5e5e5;
}
.todo__list {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  margin: 15px 0;
}
</style>
