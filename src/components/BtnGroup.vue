<template>
  <div class="current-todo__task-list_group-btn">
    <button type="button" class="current-todo__task-list_save-btn" @click="saveFunction">Сохранить</button>
    <button type="button" class="current-todo__task-list_del-btn" @click="delFunction">Удалить</button>
    <button
      type="button"
      class="current-todo__task-list_edit-btn"
      @click="cancelFunction"
    >Отменить изменения</button>
  </div>
</template>

<script>
export default {
  name: "BtnGroup",
  props: {
    id: String,
    delFunction: Function,
    saveFunction: Function,
    cancelFunction: Function
  }
};
</script> 

<style lang="scss" scoped>
.current-todo {
  &__task-list_group-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    button {
      margin: 0 5px;
      cursor: pointer;
      border: none;
      padding: 8px 15px;
      font-weight: bold;
      border-radius: 4px;
      color: #fff;
    }
  }
  &__task-list_save-btn {
    background: MediumSpringGreen;
  }
  &__task-list_del-btn {
    background: IndianRed;
  }
  &__task-list_edit-btn {
    background: DodgerBlue;
  }
}
</style>