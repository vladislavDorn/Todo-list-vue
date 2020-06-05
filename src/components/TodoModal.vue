<template>
  <div class="todo__modal_wrapper">
    <div class="todo__modal">
      <h3>{{ modaltitle }}</h3>
      <p>
        {{ modalDescription }}
        <strong>{{ itemName }}</strong>
      </p>
      <div class="todo__modal_btn-group">
        <button
          class="todo__modal_btn_accept"
          type="button"
          v-on:click="declineFunction(id)"
        >Подтвердить</button>
        <button
          class="todo__modal_btn_decline"
          type="button"
          v-on:click="toggleModal(null)"
        >Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoModal",
  props: {
    id: String,
    itemName: String,
    declineFunction: Function,
    toggleModal: Function,
    modaltitle: String,
    modalDescription: String
  }
};
</script>

<style lang="scss" scoped>
.todo {
  &__modal_wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    width: 500px;
    h3 {
      margin: 0 0 20px;
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
    &_btn-group {
      margin-top: 20px;
    }
    &_btn_accept,
    &_btn_decline {
      border: none;
      border-radius: 3px;
      padding: 8px 15px;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      margin: 0 5px;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease-in-out;
    }
    &_btn_accept:hover,
    &_btn_decline:hover {
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    }
    &_btn_accept {
      background: SpringGreen;
    }
    &_btn_decline {
      background: Crimson;
    }
  }
}
</style>