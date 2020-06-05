<template>
  <div class="current-todo__title_wrapper">
    <div v-if="getCurrentTodo.editing" class="current-todo__title_grid">
      <input
        name="newTitle"
        placeholder="Введите новое название для заметки"
        type="text"
        @input="currentTodoHandler"
      />
      <div class="current-todo__title_group-btn">
        <button
          :disabled="!getCurrentTodo.newTitle"
          type="button"
          class="current-todo__title_save-btn"
          @click="saveCurrentTodoTitle"
        />
        <button
          type="button"
          class="current-todo__title_cancel-btn"
          @click="toggleModalCurrentTodo"
        />
      </div>
    </div>
    <div v-else class="current-todo__title_grid">
      <h2 class="current-todo__title">{{ getCurrentTodo.title }}</h2>
      <button type="button" class="current-todo__title_edit" @click="toggleEditingCurrentTodo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTitleTodoBlock",
  props: {
    getCurrentTodo: Object,
    currentTodoHandler: Function,
    saveCurrentTodoTitle: Function,
    toggleModalCurrentTodo: Function,
    toggleEditingCurrentTodo: Function
  }
};
</script>

<style lang="scss" scoped>
.current-todo {
  &__title_wrapper {
    position: relative;
    padding: 30px 0 10px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    input {
      font-size: 24px;
      border: none;
      padding: 0;
      width: calc(100% - 55px);
    }
  }
  &__title_wrapper::before {
    content: "Название заметки";
    position: absolute;
    top: 5px;
    left: 0;
    font-size: 14px;
  }
  &__title_wrapper:hover &__title_edit {
    opacity: 1;
  }
  &__title_grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
  }
  &__title_edit {
    width: 15px;
    height: 15px;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.1s linear;
    margin-left: 10px;
    border: none;
    background: url(../assets/edit.png) center center / cover no-repeat;
    outline: none;
  }
  &__title {
    margin: 0;
    word-break: break-all;
    width: calc(100% - 25px);
  }
  &__title_group-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      opacity: 0.6;
      transition: all 0.2s linear;
      border: none;
      cursor: pointer;
      margin-left: 10px;
      outline: none;
    }
    button:hover {
      opacity: 1;
    }
  }
  &__title_save-btn {
    background: url(../assets/tick.png) center center / cover no-repeat;
    width: 20px;
    height: 20px;
  }
  &__title_cancel-btn {
    background: url(../assets/close.png) center center / contain no-repeat;
    width: 15px;
    height: 15px;
  }
}
</style>