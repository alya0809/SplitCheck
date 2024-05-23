<template>
  <div class="item">
    <div>
      <div>
        <strong>
          Название:
        </strong> 
        {{ menuItem.name }}
      </div>
      <div>
        <strong>
          Цена:
        </strong> 
        {{ menuItem.price}}
      </div>
      
      <div>
        <strong>
          Кто заказал: 
        </strong> 
        {{ guestsWhoEat }}
      </div>
    </div>
    <v-btn class="btn"
      @click="$emit('remove-menu', menuItem)"
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
    },
    emits: ['remove-menu'],
    computed: {
      guestsWhoEat() {
        return this.menuItem.orderedBy.join(', ');
      }
    }
  }
</script>
  