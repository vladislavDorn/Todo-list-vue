<template>
  <div v-if="getCurrentTodo" class="current-todo">
    <EditTitleTodoBlock
      :getCurrentTodo="getCurrentTodo"
      :currentTodoHandler="currentTodoHandler"
      :saveCurrentTodoTitle="saveCurrentTodoTitle"
      :toggleModalCurrentTodo="toggleModalCurrentTodo"
      :toggleEditingCurrentTodo="toggleEditingCurrentTodo"
    />
    <div class="current-todo__task-list_wrapper">
      <ul v-if="getCurrentTodo.tasksList.length" class="current-todo__task-list">
        <TaskItem
          v-for="(task, index) in getCurrentTodo.tasksList"
          :key="index"
          :id="task.id"
          :title="task.title"
          :editing="task.editing"
          :finished="task.finished"
          :toggleFinishedTask="toggleFinishedTask"
          :delTask="delTask"
          :handleEditingTask="handleEditingTask"
          :toggleEditingTask="toggleEditingTask"
        />
      </ul>
      <span v-else class="current-todo__task_list_empty">Задачи отсутствуют</span>
      <TodoCreator
        :inputValue="getCurrentTodo.newTask"
        :inputHandler="currentTodoHandler"
        :addFunction="addNewTask"
        placeholder="Название задачи"
        name="newTask"
      />
    </div>
    <BtnGroup
      :id="getCurrentTodo.id"
      :delFunction="toggleModal"
      :saveFunction="saveCurrentTodoRedirect"
      :cancelFunction="cancelСhanges"
    />
    <TodoModal
      v-if="getCurrentTodo.modal"
      :id="getCurrentTodo.id"
      :toggleModal="toggleModalCurrentTodo"
      :declineFunction="cancelModalCurrentTodo"
      :itemName="getCurrentTodo.title"
      modaltitle="Подтвердите действие"
      modalDescription="Вы действительно хотите отменить редактирование заметки "
    />
    <TodoModal
      v-else-if="getModalState.isActive"
      :id="getCurrentTodo.id"
      :toggleModal="toggleModal"
      :declineFunction="deleteTodoRedirect"
      :itemName="getCurrentTodo.title"
      modaltitle="Подтвердите действие"
      modalDescription="Вы действительно хотите удалить заметку"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskItem from "./TaskItem";
import TodoCreator from "./TodoCreator";
import TodoModal from "./TodoModal";
import EditTitleTodoBlock from "./EditTitleTodoBlock";
import BtnGroup from "./BtnGroup";

export default {
  name: "CurrentTodo",
  computed: mapGetters([
    "getCurrentTodo",
    "getCurrentTodoEditing",
    "getModalState"
  ]),
  methods: {
    ...mapActions([
      "setCurrentTodo",
      "currentTodoHandler",
      "addNewTask",
      "toggleFinishedTask",
      "delTask",
      "handleEditingTask",
      "toggleEditingTask",
      "toggleEditingCurrentTodo",
      "toggleModalCurrentTodo",
      "saveCurrentTodoTitle",
      "saveCurrentTodo",
      "toggleModal",
      "delTodo",
      "cancelСhanges"
    ]),
    // Cancel popup when edit title todo
    cancelModalCurrentTodo() {
      this.toggleModalCurrentTodo();
      this.toggleEditingCurrentTodo();
    },
    // Redirect to main page and delete todo
    deleteTodoRedirect() {
      this.$router.push("/");
      this.delTodo(this.getCurrentTodo.id);
    },
    // Redirect to main page and save todo
    saveCurrentTodoRedirect() {
      this.$router.push("/");
      this.saveCurrentTodo(this.getCurrentTodo.id);
    }
  },
  // Passing id from $route object
  mounted() {
    const todoId = this.$route.params.id;
    this.setCurrentTodo(todoId);
  },
  components: {
    TaskItem,
    TodoCreator,
    TodoModal,
    EditTitleTodoBlock,
    BtnGroup
  }
};
</script>

<style lang="scss" scoped>
.current-todo {
  &__task-list {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }
  &__task-list_wrapper {
    position: relative;
  }
  &__task-list_wrapper:before {
    content: "Список задач";
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 14px;
  }
  &__task_list_empty {
    font-weight: bold;
    font-style: italic;
    padding: 15px 0;
    display: block;
  }
}
</style>