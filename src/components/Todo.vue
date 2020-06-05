<template>
  <div class="todo__item">
    <div class="todo__del" v-on:click="toggleModal(id)">✖</div>
    <h1 class="todo__item_title" :title="title">{{ title }}</h1>
    <div class="todo__task-list_wrapper">
      <ul v-if="tasksList.length" class="todo__task-list">
        <li
          class="todo__task-list_item"
          v-for="(task, index) in tasksList"
          :key="index"
          :title="task.title"
        >{{ task.title }}</li>
      </ul>
      <span v-else class="todo__task-list_empty">Задачи отсутствуют</span>
    </div>
    <div class="todo__link">
      <router-link :to="/current-todo/ + id">Перейти к заметке</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    id: String,
    title: String,
    tasksList: Array,
    toggleModal: Function
  }
};
</script>

<style lang="scss" scoped>
.todo {
  &__item {
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__item_title {
    font-size: 22px;
    margin: 0 0 25px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  &__del {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  &__task-list_wrapper {
    position: relative;
  }
  &__task-list_wrapper:before {
    content: "Список задач";
    position: absolute;
    top: -15px;
    left: 0;
    color: #333;
    font-size: 12px;
    border-bottom: 1px solid #e5e5e5;
  }
  &__task-list {
    margin: 0;
    padding: 0;
    height: 130px;
    overflow: hidden;
    width: 100%;
  }
  &__task-list_item {
    list-style: none;
    padding: 7px 10px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &__task-list_empty {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    margin: 15px 0;
    display: block;
  }
  &__task-list_item:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  &__link {
    margin-top: auto;
    text-align: right;
    a {
      color: #333;
      text-decoration: none;
      font-size: 15px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
