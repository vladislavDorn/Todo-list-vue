<template>
  <div class="todo__item">
    <h1>{{ title }}</h1>
    <div class="todo__del" v-on:click="toggleModal(id)">✖</div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    id: Number,
    title: String,
    tasksList: Array,
    toggleModal: Function
  }
};
</script>

<style scoped>
.todo__item {
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.todo__del {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
