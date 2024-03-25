<template>
    <div class="menuItem">
      <div>
        <div>{{ menuItem.id }}</div>
        <div><strong>Имя:</strong> {{ menuItem.name }}</div>
        <div><strong>Цена:</strong> {{ menuItem.price}}</div>
        <div><strong>Кто заказал:</strong> {{ menuItem.orderedBy }}</div>
      </div>
      <div class="menuItem__btns">
        <my-button
          @click="$router.push(`/menuItems/$menuItem.id}`)"
        >
          Открыть
        </my-button>
       <my-button
         @click="$emit('remove', menuItem)"
       >
         Удалить
       </my-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        menuItem: {
        type: Object,
        required: true,
      }
    }
  }
  </script>
  
  <style scoped>
  .menuItem {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menuItem__btns {
    display: flex;
  }
  </style>