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
    <h2 v-else style="color: rgb(186, 104, 200)">
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
  
  