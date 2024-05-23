<template>
  <div>
    <div v-if="guests.length">
      <h3>Список гостей</h3>
      <transition-group name="user-list">
        <guests-item
          v-for="guest in guests"
          :key="guest.id"
          :guest="guest"
          @remove="$emit('remove', guest)"
        />
      </transition-group>
    </div>
    <h2 v-else>
      Список гостей пуст
    </h2>
  </div>
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
    },
    emits: ['remove']
  }
</script>

  