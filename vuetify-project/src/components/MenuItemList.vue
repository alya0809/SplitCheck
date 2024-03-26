<template>
    <div v-if="menuItems.length > 0">
      <h3>Список позиций</h3>
      <transition-group name="menuItem-list">
        <menu-item
          v-for="menuItem in menuItems"
          :menuItem="menuItem"
          :key="menuItem.id"
          @removeMenu="$emit('removeMenu', menuItem)"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: rgb(186, 104, 200)">
      Список позиций пуст
    </h2>
  </template>
  
  <script>
  import MenuItem from "@/components/MenuItem";
  export default {
    components: {MenuItem},
    props: {
        menuItems: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
