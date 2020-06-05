import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList.vue";
import CurrentTodo from "../components/CurrentTodo.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "main", component: TodoList },
  { path: "/current-todo/:id", name: "current-todo", component: CurrentTodo },
];

const router = new VueRouter({
  routes,
});

export default router;
