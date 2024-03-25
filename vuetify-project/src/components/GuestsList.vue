<template>
    <div v-if="guests.length > 0">
      <h3>Список гостей</h3>
      <transition-group name="user-list">
        <guests-item
          v-for="guest in guests"
          :guest="guest"
          :key="guest.id"
          @remove="$emit('remove', guest)"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: red">
      Список гостей пуст
    </h2>
  </template>
  
  <script>
  import GuestsItem from "@/components/GuestsItem";
  export default {
    components: {GuestsItem},
    props: {
        guests: {
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