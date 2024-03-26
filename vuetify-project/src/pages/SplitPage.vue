<template>
  <h1>Расчет стоимости</h1>
  <v-container>
    <guests-add 
    @create="addGuests"/>
    <menu-item-add
    :guests="guests"
    @createMenu="addMenuItem"/>
  </v-container>
  <v-container>
    <guests-list 
    :guests="guests"
    @remove="removeGuests"/>
  </v-container>
  <v-container>
    <menu-item-list
    :menuItems="menuItems"
    @removeMenu="removeMenuItems"/>
  </v-container>
  <calculate-price
    :guests="guests"
    :menuItems="menuItems"
  />
</template>
  
<script>
import GuestsAdd from '@/components/GuestsAdd.vue';
import MenuItemAdd from '@/components/MenuItemAdd.vue';
import GuestsList from '@/components/GuestsList.vue';
import MenuItemList from '@/components/MenuItemList.vue';
import CalculatePrice from '@/components/CalculatePrice.vue';
  export default {
    components: {
        GuestsAdd,
        MenuItemAdd,
        GuestsList,
        MenuItemList,
        CalculatePrice
    },
    data() {
        return {
            guests: [
              // {}
            ],
            menuItems: [
              // {}
            ]
        }
    },
    methods: {
        addGuests(guest) {
          this.guests.push(guest);
        },
        removeGuests(guest) {
            this.guests = this.guests.filter(p => p.id != guest.id)
        },
        addMenuItem(menuItem) {
          this.menuItems.push(menuItem);
        },
        removeMenuItems(menuItem) {
            this.menuItems = this.menuItems.filter(p => p.id != menuItem.id)
        }
    }
  }
</script>

