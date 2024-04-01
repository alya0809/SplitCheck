<template>
  <v-container class="split">
    <h1>Расчет стоимости</h1>
    <v-container>
      <v-row>
        <v-col cols="4">
          <guests-add 
          @create="addGuests"/>
        </v-col>
        <v-col cols="4">
          <menu-item-add
          :guests="guests"
          @createMenu="addMenuItem"/>
        </v-col>
        <v-col cols="4">
          <calculate-price
            :guests="guests"
            :menuItems="menuItems"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="border-content">
      <v-row class="justify-center align-center">
        <v-col cols="5" class="mb-4">
          <guests-list 
            :guests="guests" 
            @remove="removeGuests"
          />
        </v-col>
        <v-col cols="4" class="mb-4">
          <menu-item-list 
            :menuItems="menuItems" 
            @removeMenu="removeMenuItems"
          />
        </v-col>
      </v-row>
    </v-container>
    
  </v-container>
  
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
          setGuest: 'main/setGuest',
          setMenuItem: 'main/setMenuItem',
          setAddGuests: 'main/setAddGuests',
          setRemoveGuests: 'main/setRemoveGuests',
          setAddMenuItem: 'main/setAddMenuItem',
          setRemoveMenuItems: 'main/setRemoveMenuItems'
        }),
        addGuests(newGuest) {
          this.$store.commit('main/setAddGuests', newGuest);
        },
        addMenuItem(newItem) {
          this.$store.commit('main/setAddMenuItem', newItem);
        },
        removeGuests(index) {
          this.$store.commit('main/setRemoveGuests', index);
        },
        removeMenuItems(index) {
          this.$store.commit('main/setRemoveMenuItems', index);
            
        },
      },
    computed: {
      ...mapState({
        guests: state => state.main.guests,
        menuItems: state => state.main.menuItems
        })
    }
  }
</script>

