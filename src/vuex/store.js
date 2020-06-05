import Vue from "vue";
import Vuex from "vuex";
import TodosModule from "./modules/todos";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodosModule,
  },
  plugins: [createPersistedState()],
});
