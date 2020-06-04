<template>
  <div id="app">
    <div class="container">
      <TodoList :todos="todos"/>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
   data() {
    return {
      todos: [
        {
          id: 1,
          title: "First todo",
          tasksList: [
            {
              id: 1,
              title: "task name"
            }
          ]
        },
        {
          id: 2,
          title: "Second todo",
          tasksList: [
            {
              id: 1,
              title: "task name"
            }
          ]
        }
      ]
    };
  },
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1170px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
