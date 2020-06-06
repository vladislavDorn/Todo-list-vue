import mutations from "../mutations/mutations";
import actions from "../actions/actions";
import getters from "../getters/getters";
// Library that generates a unique id
import { uuid } from "vue-uuid";

export default {
  state: {
    newTodo: "",
    modal: {
      isActive: false,
      id: null,
    },
    todos: [
      {
        id: uuid.v1(),
        title: "First todo",
        tasksList: [
          {
            id: uuid.v1(),
            title: "task name",
            finished: false,
            editing: false,
          },
          {
            id: uuid.v1(),
            title: "task name",
            finished: true,
            editing: false,
          },
        ],
      },
      {
        id: uuid.v1(),
        title: "Second todo",
        tasksList: [],
      },
    ],
    currentTodo: null,
    currentTodoEditing: false,
  },
  actions,
  mutations,
  getters,
};
