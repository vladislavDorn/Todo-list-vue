export default {
  state: {
    newTodo: "",
    modal: {
      isActive: false,
      id: null,
    },
    todos: [
      {
        id: 1,
        title: "First todo",
        tasksList: [
          {
            id: 1,
            title: "task name",
          },
        ],
      },
      {
        id: 2,
        title: "Second todo",
        tasksList: [
          {
            id: 1,
            title: "task name",
          },
        ],
      },
    ],
  },
  actions: {
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
  },
  mutations: {
    addTodo(state) {
      if (state.newTodo.length) {
        state.todos = [
          ...state.todos,
          { id: state.todos.length + 1, title: state.newTodo, tasksList: [] },
        ];
        state.newTodo = "";
      }
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
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoValue(state) {
      return state.newTodo;
    },
    getModalState(state) {
      return state.modal;
    },
  },
};
