<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isDialogGuestOpen"
      max-width="600"
    >
      <template #activator="{ props: activatorProps }">
        <v-col>
          <v-btn
            class="btn"
            prepend-icon="mdi-account"
            text="Добавить гостя"
            v-bind="activatorProps"
          />
        </v-col>
      </template>
      <v-card
        class="purple-border"
        outlined
        prepend-icon="mdi-account"
        title="Добавить гостя"
      >
        <v-card-text>
          <v-row dense>
            <v-col color="rgb(232, 206, 237)">
              <v-text-field
                v-model.trim="guest.name"
                label="Имя*"
                required
                :class="{ 'error': !guest.name }"
              />
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">
            *Обязательное поле
          </small>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="rgb(186, 104, 200)"
            text="Закрыть"
            variant="tonal"
            @click="onClickCloseDialogGuest"
          />
          <v-btn
            class="btn"
            text="Добавить"
            @click="onClickAddGuests"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {shakeForm} from "@/service/shakeForm.js"
  export default {
    emits: ['create'],
    data() {
      return {
        guest: {
          name: '',
        },
        isDialogGuestOpen: false
      }
    },
    methods: {
      onClickAddGuests() { //function for adding a guest
        if (!this.guest.name) {
          shakeForm();
          return;
        }
        this.guest.id = Date.now();
        this.$emit('create', this.guest)
        this.clearGuest();
      },
      onClickCloseDialogGuest() { //function to close the dialog
          this.clearGuest();
          this.isDialogGuestOpen = false;
      },
      clearGuest() {
        this.guest = {
          name: ''
        }
      }
    },
  }
</script>
