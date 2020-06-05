<template>
  <li class="current-todo__task-list_item">
    <input
      class="current-todo__task-list_edit_input"
      placeholder="Введите новое название для задачи"
      v-if="editing"
      type="text"
      @input="e => handleEditingTask({ id, value: e.target.value })"
    />
    <div v-else class="current-todo__task-list_item_active">
      <label class="current-todo__task-list_item_label">
        {{title}}
        <input
          @click="toggleFinishedTask(id)"
          type="checkbox"
          class="current-todo__task-list_item_checkbox"
          :checked="finished"
        />
        <span class="current-todo__task-list_item_checkmark"></span>
      </label>
    </div>
    <div class="current-todo__task-list_item_control-panel">
      <button
        class="current-todo__task-list_item_edit"
        type="button"
        @click="toggleEditingTask(id)"
      />
      <button class="current-todo__task-list_item_del" type="button" @click="delTask(id)" />
    </div>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    title: String,
    id: String,
    finished: Boolean,
    editing: Boolean,
    toggleFinishedTask: Function,
    delTask: Function,
    handleEditingTask: Function,
    toggleEditingTask: Function
  }
};
</script>  

<style lang="scss" scoped>
.current-todo {
  &__task-list_item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
  &__task-list_item:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  &__task-list_item_control-panel {
    width: 60px;
  }
  &__task-list_item_edit,
  &__task-list_item_del {
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.2s linear;
    outline: none;
    opacity: 0.6;
  }
  &__task-list_item_edit:hover,
  &__task-list_item_del:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  &__task-list_item_edit {
    background: url(../assets/edit.png) center center / cover no-repeat;
  }
  &__task-list_item_del {
    background: url(../assets/trash.png) center center / cover no-repeat;
  }
  &__task-list_item_active {
    width: calc(100% - 60px);
  }
  &__task-list_item_label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    word-break: break-word;
  }
  &__task-list_item_label &__task-list_item_checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &__task-list_item_checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 3px;
  }
  &__task-list_item_label:hover
    &__task-list_item_checkbox
    ~ &__task-list_item_checkmark {
    background-color: #ccc;
  }
  &__task-list_item_label
    &__task-list_item_checkbox:checked
    ~ &__task-list_item_checkmark {
    background-color: LightSeaGreen;
  }
  &__task-list_item_checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  &__task-list_item_label
    &__task-list_item_checkbox:checked
    ~ &__task-list_item_checkmark:after {
    display: block;
  }
  &__task-list_item_label &__task-list_item_checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &__task-list_edit_input {
    background: transparent;
    border: none;
    padding: 0;
    font-size: 22px;
    width: calc(100% - 60px);
  }
}
</style>