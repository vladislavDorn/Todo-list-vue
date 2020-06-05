export default {
  addTodo(context) {
    context.commit("addTodo");
  },
  delTodo(context, id) {
    context.commit("delTodo", id);
  },
  newTodoHandler(context, value) {
    context.commit("newTodoHandler", value.target.value);
  },
  toggleModal(context, id) {
    context.commit("toggleModal", id);
  },
  setCurrentTodo(context, id) {
    context.commit("setCurrentTodo", id);
  },
  currentTodoHandler(context, event) {
    context.commit("currentTodoHandler", event);
  },
  addNewTask(context) {
    context.commit("addNewTask");
  },
  toggleFinishedTask(context, index) {
    context.commit("toggleFinishedTask", index);
  },
  delTask(context, id) {
    context.commit("delTask", id);
  },
  toggleEditingTask(context, id) {
    context.commit("toggleEditingTask", id);
  },
  handleEditingTask(context, obj) {
    context.commit("handleEditingTask", obj);
  },
  toggleEditingCurrentTodo(context) {
    context.commit("toggleEditingCurrentTodo");
  },
  toggleModalCurrentTodo(context) {
    context.commit("toggleModalCurrentTodo");
  },
  saveCurrentTodoTitle(context) {
    context.commit("saveCurrentTodoTitle");
  },
  saveCurrentTodo(context) {
    context.commit("saveCurrentTodo");
  },
  cancelСhanges(context) {
    context.commit("cancelСhanges");
  },
};
