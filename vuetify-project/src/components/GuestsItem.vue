<template>
    <div class="guest">
      <div>
        <div>{{ guest.id }}</div>
        <div><strong>Имя:</strong> {{ guest.name }}</div>
      </div>
      <div class="guest__btns">
        <my-button
          @click="$router.push(`/guests/$guest.id}`)"
        >
          Открыть
        </my-button>
       <my-button
         @click="$emit('remove', guest)"
       >
         Удалить
       </my-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        guest: {
        type: Object,
        required: true,
      }
    }
  }
  </script>
  
  <style scoped>
  .guest {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .guest__btns {
    display: flex;
  }
  </style>