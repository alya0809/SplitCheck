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
    <v-row>
      <v-col cols="6">
        <guests-list 
          :guests="guests" 
          @remove="removeGuests"
        />
      </v-col>
      <v-col cols="6">
        <menu-item-list 
          :menuItems="menuItems" 
          @removeMenu="removeMenuItems"
        />
      </v-col>
    </v-row>
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
import {mapState, mapMutations} from 'vuex';
  export default {
    components: {
        GuestsAdd,
        MenuItemAdd,
        GuestsList,
        MenuItemList,
        CalculatePrice
    },
    methods: {
      ...mapMutations({
          setGuest: 'guest/setGuest',
          setMenuItem: 'guest/setMenuItem',
          setAddGuests: 'guest/setAddGuests',
          setRemoveGuests: 'guest/setRemoveGuests',
          setAddMenuItem: 'guest/setAddMenuItem',
          setRemoveMenuItems: 'guest/setRemoveMenuItems'
        }),
        addGuests(newGuest) {
          this.$store.commit('guest/setAddGuests', newGuest);
        },
        addMenuItem(newItem) {
          this.$store.commit('guest/setAddMenuItem', newItem);
        },
        removeGuests(index) {
          this.$store.commit('guest/setRemoveGuests', index);
        },
        removeMenuItems(index) {
          this.$store.commit('guest/setRemoveMenuItems', index);
            
        },
      },
    computed: {
      ...mapState({
        guests: state => state.guest.guests,
        menuItems: state => state.guest.menuItems
        })
    }
  }
</script>

