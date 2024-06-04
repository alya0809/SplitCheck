<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isDialogMenuOpen"
      max-width="600"
    >
      <template #activator="{ props: activatorProps }">
        <v-col>
          <v-btn
            class="btn"
            prepend-icon="mdi-food"
            text="Добавить позицию"
            v-bind="activatorProps"
          />
        </v-col>
      </template>

      <v-card
        class="purple-border"
        outlined
        prepend-icon="mdi-food"
        title="Добавить позицию"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="8"
              sm="6"
            >
              <v-text-field
                v-model.trim="menuItem.name"
                label="Название блюда/напитка*"
                required
                pattern="[a-zA-Zа-яА-Я]+"
                title="Пожалуйста, вводите только буквы"
                :class="{ 'error': !isNameValid || !menuItem.name }"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                v-model.trim="menuItem.price"
                label="Цена*"
                required
                title="Пожалуйста, вводите только положительные числа"
                :class="{ 'error': !menuItem.price }"
              />
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
                  :class="{ 'error': !menuItem.orderedBy?.length}"
                />
              </v-col>
            </v-row>
          </v-row>

          <small class="text-caption text-medium-emphasis">
            *Обязательное поле
          </small>
        </v-card-text>

        <v-divider />
        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Закрыть"
            color="rgb(186, 104, 200)"
            variant="tonal"
            @click="onClickCloseDialog"
          />

          <v-btn
            class="btn"
            text="Добавить"
            variant="flat"
            @click="onClickAddItem"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {shakeForm} from "@/service/shakeForm.js"
  export default {
    props: {
      guests: {
        type: Array,
        required: true
      }
    },
    emits: ['createMenu'],
    data() {
      return {
        menuItem: {
          name: '',
          price: 0,
          orderedBy: []
        },
        isDialogMenuOpen: false,
      }
    },
    methods: {
      onClickAddItem() {
          // Check that all required fields are filled in
          if (!this.menuItem.name || !this.menuItem.price || !this.menuItem.orderedBy?.length) {
            shakeForm();
            return;
          }
          // Check that the name of the dish contains only letters (English or Russian)
          let nameRegex = /^[a-zA-Zа-яА-Яs ]+$/;
          if (!nameRegex.test(this.menuItem.name)) {
            alert('Пожалуйста, вводите только буквы в названии блюда');
            shakeForm();
            return;
          }
          // Checking that the price consists only of numbers
          if ((isNaN(this.menuItem.price)) || (this.menuItem.price <= 0)) {
              alert('Цена может быть только положительной!');
              shakeForm();
              return;
          }

          this.menuItem.id = Date.now();
          this.$emit('createMenu', this.menuItem);
          this.clearDialog();
      },

      onClickCloseDialog() { //function to close the dialog
        this.clearDialog();
        this.isDialogMenuOpen = false;
      },
      clearDialog() {
        this.menuItem = {
            name: '',
            price: 0,
            orderedBy: []
        };
      },
    }
  }
</script>
