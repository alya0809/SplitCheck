<template>
  <div class="item">
    <strong>
      Имя:
      {{ guest.name }}
    </strong>
    <v-btn
      class="btn"
      @click="$emit('remove', guest)"
    >
      Удалить
    </v-btn>
  </div>
</template>

<script> //a component of a single guest value
  export default {
    props: {
      guest: {
        type: Object,
        required: true,
      }
    },
    emits: ['remove']
  }
</script>
