<template>
  <v-container class="split">
    <h1>
      Расчет стоимости
    </h1>
    <v-container>
      <v-row>
        <v-col cols="4">
          <guests-add 
            @create="addGuests"/>
        </v-col>
        <v-col cols="4">
          <menu-item-add
            :guests="guests"
            @create-menu="addMenuItem"/>
        </v-col>
        <v-col cols="4">
          <calculate-price
            :guests="guests"
            :menu-items="menuItems"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="border-content">
      <v-row class="justify-center align-center">
        <v-col 
          cols="4" 
          class="mb-4"
        >
          <guests-list 
            :guests="guests" 
          />
        </v-col>
        <v-col 
          cols="4" 
          class="mb-4"
        >
          <menu-item-list 
            :menu-items="menuItems" 
            @remove-menu="removeMenuItems"
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
          addGuests: 'main/addGuests',
          addMenuItem: 'main/addMenuItem',
          removeMenuItems: 'main/removeMenuItems'
        }),
        addGuests(newGuest) {
          this.$store.commit('main/addGuests', newGuest);
        },
        addMenuItem(newItem) {
          this.$store.commit('main/addMenuItem', newItem);
        },
        removeMenuItems(index) {
          this.$store.commit('main/removeMenuItems', index);  
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

