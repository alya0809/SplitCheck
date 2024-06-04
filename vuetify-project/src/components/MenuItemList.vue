<template>
  <div>
    <div v-if="menuItems.length">
      <h3>
        Список позиций
      </h3>
      <transition-group name="user-list">
        <menu-item
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :menu-item="menuItem"
          @remove-menu="$emit('removeMenu', menuItem)"
        />
      </transition-group>
    </div>
    <h2 v-else>
      Список позиций пуст
    </h2>
  </div>
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
    },
    emits: ['removeMenu']
  }
</script>

