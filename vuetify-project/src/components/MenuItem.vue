<template>
    <div class="item">
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
      <v-btn class="btn"
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
  