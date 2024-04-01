<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-col cols="auto">
          <v-btn class="btn"
            density="default"
            color="rgb(186, 104, 200)"
            prepend-icon="mdi-food"
            text="Добавить позицию"
            v-bind="activatorProps"
          ></v-btn>
        </v-col>
      </template>

      <v-card class="purple-border" outlined prepend-icon="mdi-food" title="Добавить позицию">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="8" sm="6">
              <v-text-field
                v-model="menuItem.name"
                label="Название блюда/напитка*"
                :class="{ 'error': !menuItem.name }"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-text-field 
                v-model="menuItem.price" 
                label="Цена*" 
                required
                :class="{ 'error': !menuItem.price }"
                ></v-text-field>
            </v-col>
            <v-row>
            <v-col>
              <v-select
                v-model="menuItem.orderedBy"
                :items="guests.map(guest => guest.name)"
                label="Кто заказал*"
                multiple
                chips
                no-data-text="Список пуст. Добавьте гостей"
                required
                :class="{ 'error': !menuItem.orderedBy || menuItem.orderedBy.length === 0 }"
              ></v-select>
            </v-col>
          </v-row>

          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*Обязательное поле</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Закрыть"
            color="rgb(186, 104, 200)"
            variant="tonal"
            @click="closeDialog"
          ></v-btn>

          <v-btn
            class="btn"
            text="Добавить"
            variant="flat"
            @click="addMenuItem"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
</template>
  
  <script>
  import {shakeForm} from "@/components/shakeForm.js"
  export default {
    props: {
        guests: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        menuItem: {
          name: '',
          price: 0,
          orderedBy: []
        },
        dialog: false,
      }
    },
    methods: {
      addMenuItem() {
        if (!this.menuItem.name || !this.menuItem.price || !this.menuItem.orderedBy || this.menuItem.orderedBy.length === 0) {
          shakeForm();
          return;
        }

        this.menuItem.id = Date.now();
        this.$emit('createMenu', this.menuItem);
        this.menuItem = {
          name: '',
          price: 0,
          orderedBy: []
        };
      },
      closeDialog() { //function to close the dialog
          if (this.menuItem.name || this.menuItem.price || this.menuItem.orderedBy.length > 0) {
              this.menuItem = {
                  name: '',
                  price: 0,
                  orderedBy: []
              };
          }
          this.dialog = false;
      }

    }
  }
  </script>
  
<style lang="scss" scoped>
</style>