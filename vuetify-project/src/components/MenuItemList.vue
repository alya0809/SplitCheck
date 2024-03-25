<template>
    <div v-if="menuItems.length > 0">
      <h3>Список позиций</h3>
      <transition-group name="menuItem-list">
        <menuItem
          v-for="menuItem in menuItems"
          :menuItem="menuItem"
          :key="menuItem.id"
          @remove="$emit('remove', menuItem)"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: red">
      Список позиций пуст
    </h2>
  </template>
  
  <script>
  import MenuItem from "@/components/MenuItem";
  export default {
    components: {MenuItem},
    props: {
        menuItem: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .user-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 0.4s ease;
  }
  .user-list-enter-from,
  .user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .user-list-move {
    transition: transform 0.4s ease;
  }
  </style>