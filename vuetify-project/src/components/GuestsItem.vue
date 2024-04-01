<template>
    <div class="guest">
      <div>
        <div><strong>Имя:</strong> {{ guest.name }}</div>
      </div>
      <v-btn class="btn"
      @click="$emit('remove', guest)"
      >
         Удалить
       </v-btn>
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
    border: 4px solid rgb(186, 104, 200);
    border-radius: 10px;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .guest__btns {
    display: flex;
  }
  v-btn {
    align-self:flex-end; 
    padding:10px 15px
  }
  </style>