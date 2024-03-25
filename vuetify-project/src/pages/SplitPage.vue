<template>
  <h1>Расчет стоимости</h1>
  <guests-add 
  @create="addGuests"/>
  <menu-item-add/>
  <guests-list 
  :guests="guests"
  @remove="removeGuests"/>

</template>
  
<script>
import GuestsAdd from '@/components/GuestsAdd.vue';
import MenuItemAdd from '@/components/MenuItemAdd.vue';
import GuestsList from '@/components/GuestsList.vue'
  export default {
    components: {
        GuestsAdd,
        MenuItemAdd,
        GuestsList
    },
    data() {
        return {
            guests: [
                {id: 1, name: 'Алена'}
            ]
        }
    },
    methods: {
        addGuests(guest) {
          this.guests.push(guest);
        },
        removeGuests(guest) {
            this.guests = this.guests.filter(p => p.id != guest.id)
        }
    }
  }
</script>

