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
              text="Добавить гостя"
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
                    label="Имя*"
                    required
                  ></v-text-field>
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
    data() {
      return {
        guest: {
          name: '',
        }
      }
    },
    methods: {
      addGuests() {
        this.guest.id = Date.now();
        this.$emit('create', this.guest)
        this.guest = {
          name: ''
        }
      }
    },
  }
  </script>
  
<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>