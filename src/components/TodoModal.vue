<template>
  <div class="todo__modal_wrapper">
    <div class="todo__modal">
      <h3>Подтвердите действие</h3>
      <p>
        Вы действительно хотите удалить заметку
        <strong>{{ title }}</strong>
      </p>
      <button type="button" v-on:click="delTodo(id)">Подтвердить</button>
      <button type="button" v-on:click="toggleModal(null)">Отменить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoModal",
  props: {
    id: Number,
    title: String,
    delTodo: Function,
    toggleModal: Function
  }
};
</script>

<style scoped>
.todo__modal_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.todo__modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  width: 500px;
}
</style>