<template>
    <div class="pa-4 text-center">
        <v-dialog
          v-model="dialog"
          max-width="600"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              class="text-none font-weight-regular"
              prepend-icon="mdi-account"
              text="Добавить позицию меню"
              variant="tonal"
              v-bind="activatorProps"
            ></v-btn>
          </template>
    
          <v-card
            prepend-icon="mdi-account"
            title="User Profile"
          >
            <v-card-text>
              <v-row dense>
                <v-col
                  cols="12"
                  md="4"
                  sm="6"
                >
                  <v-text-field
                    label="Название блюда/напитка*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                    sm="6"
                    >
                    <v-text-field
                        label="Цена*"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="guests.map(guest => guest.name)"
                      label="Кто заказывал"
                      auto-select-first
                      multiple
                    ></v-autocomplete>
                </v-col>
              </v-row>
    
              <small class="text-caption text-medium-emphasis">*Обязательное поле</small>
            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-actions>
              <v-spacer></v-spacer>
    
              <v-btn
                text="Закрыть"
                variant="plain"
                @click="dialog = false"
              ></v-btn>
    
              <v-btn
                color="primary"
                text="Добавить"
                variant="tonal"
                @click="dialog = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
  </template>
  
  <script>
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
        }
      }
    },
    methods: {
      addMenuItem() {
        this.menuItem.id = Date.now();
        this.$emit('create', this.menuItem)
        this.menuItem = {
          name: '',
          price: 0,
          orderedBy: []
        }
      }
    }
}
  </script>
  
<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>