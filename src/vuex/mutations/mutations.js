import { uuid } from "vue-uuid";

export default {
  addTodo(state) {
    state.todos = [
      ...state.todos,
      { id: uuid.v1(), title: state.newTodo, tasksList: [] },
    ];
    state.newTodo = "";
  },
  newTodoHandler(state, value) {
    state.newTodo = value;
  },
  delTodo(state, id) {
    state.todos = state.todos.filter((el) => el.id !== id);
    state.modal.isActive = false;
  },
  toggleModal(state, id) {
    state.modal = {
      ...state.modal,
      isActive: !state.modal.isActive,
      id,
    };
  },
  setCurrentTodo(state, id) {
    state.currentTodo = {
      ...state.todos.find((el) => el.id === id),
      newTask: "",
      newTitle: "",
      editing: false,
      modal: false,
    };
  },
  currentTodoHandler(state, event) {
    state.currentTodo[event.target.name] = event.target.value;
  },
  addNewTask(state) {
    state.currentTodo.tasksList = [
      ...state.currentTodo.tasksList,
      {
        id: uuid.v1(),
        title: state.currentTodo.newTask,
        finished: false,
      },
    ];
    state.currentTodo.newTask = "";
  },
  toggleFinishedTask(state, id) {
    state.currentTodo.tasksList = state.currentTodo.tasksList.map((task) =>
      task.id === id ? { ...task, finished: !task.finished } : task
    );
  },
  delTask(state, id) {
    state.currentTodo.tasksList = state.currentTodo.tasksList.filter(
      (task) => task.id !== id
    );
  },
  toggleEditingTask(state, id) {
    state.currentTodo.tasksList = state.currentTodo.tasksList.map((task) =>
      task.id === id ? { ...task, editing: !task.editing } : task
    );
  },
  handleEditingTask(state, obj) {
    state.currentTodo.tasksList = state.currentTodo.tasksList.map((task) =>
      task.id === obj.id ? { ...task, title: obj.value } : task
    );
  },
  toggleEditingCurrentTodo(state) {
    state.currentTodo.editing = !state.currentTodo.editing;
    state.currentTodo.newTitle = "";
  },
  toggleModalCurrentTodo(state) {
    state.currentTodo.modal = !state.currentTodo.modal;
  },
  saveCurrentTodoTitle(state) {
    state.currentTodo.title = state.currentTodo.newTitle;
    state.currentTodo.editing = !state.currentTodo.editing;
  },
  saveCurrentTodo(state) {
    state.todos = state.todos.map((todo) =>
      todo.id === state.currentTodo.id ? state.currentTodo : todo
    );
    state.modal.isActive = false;
  },
  cancelСhanges(state) {
    state.currentTodo = {
      ...state.todos.find((todo) => todo.id === state.currentTodo.id),
      newTask: "",
      newTitle: "",
      editing: false,
      modal: false,
    };
  },
};
