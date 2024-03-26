<template>
    <div class="menuItem">
      <div>
        <div><strong>Название:</strong> {{ menuItem.name }}</div>
        <div><strong>Цена:</strong> {{ menuItem.price}}</div>
        <div><strong>Кто заказал: </strong> 
          <span v-for="(guest, index) in menuItem.orderedBy" :key="index">
            <template v-if="index !== 0">,</template>
            {{ guest }}
          </span>
        </div>
      </div>
      <v-btn color="rgb(186, 104, 200)"
        @click="$emit('removeMenu', menuItem)"
        >
         Удалить
      </v-btn>
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
    border: 4px solid rgb(186, 104, 200);
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menuItem__btns {
    display: flex;
  }
  </style>