<template>
  <div class="todo__wrapper">
    <h2 class="todo__counter">{{ "Количество заметок: " + getTodos.length }}</h2>
    <div class="todo__list">
      <Todo
        v-for="(todo, index) in getTodos"
        :key="index"
        :id="todo.id"
        :title="todo.title"
        :tasksList="todo.tasksList"
        :delTodo="delTodo"
        :getModalState="getModalState"
        :toggleModal="toggleModal"
      />
    </div>
    <TodoCreator
      placeholder="Название заметки"
      :inputHandler="newTodoHandler"
      :addFunction="addTodo"
      :inputValue="getTodoValue"
    />
    <TodoModal
      v-if="getModalState.isActive"
      :toggleModal="toggleModal"
      :declineFunction="delTodo"
      :id="getModalState.id"
      :itemName="getTodos.find(el => el.id === getModalState.id).title"
      modaltitle="Подтвердите действие"
      modalDescription="Вы действительно хотите удалить заметку"
    />
  </div>
</template> 

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from "./Todo.vue";
import TodoModal from "./TodoModal";
import TodoCreator from "./TodoCreator";

export default {
  name: "TodoList",
  computed: mapGetters(["getTodos", "getTodoValue", "getModalState"]),
  methods: mapActions([
    "addTodo",
    "newTodoHandler",
    "delTodo",
    "toggleModal",
    "getLocalStorageState"
  ]),
  components: {
    Todo,
    TodoModal,
    TodoCreator
  },
  // Check localstorage for state synchronization
  mounted() {
    const storageData = localStorage.getItem("vuex");
    if (storageData) {
      this.getLocalStorageState(JSON.parse(storageData).TodosModule);
    }
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
  width: 100%;
}
</style>
