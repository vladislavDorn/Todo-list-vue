export default {
  getTodos(state) {
    return state.todos;
  },
  getTodoValue(state) {
    return state.newTodo;
  },
  getModalState(state) {
    return state.modal;
  },
  getCurrentTodo(state) {
    return state.currentTodo;
  },
  getCurrentTodoEditing(state) {
    return state.currentTodoEditing;
  },
};
