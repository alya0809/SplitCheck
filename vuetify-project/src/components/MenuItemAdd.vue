<template>
  <div class="pa-4 text-center">
    <v-dialog 
      v-model="isDialogMenuOpen" 
      max-width="600">
      <template #activator="{ props: activatorProps }">
        <v-col cols="auto">
          <v-btn 
            class="btn"
            prepend-icon="mdi-food"
            text="Добавить позицию"
            v-bind="activatorProps"
          ></v-btn>
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
            sm="6">
              <v-text-field
                v-model="menuItem.name"
                  label="Название блюда/напитка*"
                  required
                  pattern="[a-zA-Zа-яА-Я]+"
                  title="Пожалуйста, вводите только буквы"
                  :class="{ 'error': !isNameValid || !menuItem.name }"
              >
              </v-text-field>
            </v-col>
            <v-col 
            cols="12" 
            md="4" 
            sm="6"
            >
              <v-text-field 
                v-model="menuItem.price" 
                label="Цена*" 
                required
                title="Пожалуйста, вводите только цифры"
                :class="{ 'error': !menuItem.price }"
              >
              </v-text-field>
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
                ></v-select>
              </v-col>
            </v-row>
          </v-row>

          <small class="text-caption text-medium-emphasis">
            *Обязательное поле
          </small>
        </v-card-text>

        <v-divider/>
        <v-card-actions>
          <v-spacer/>

          <v-btn
            text="Закрыть"
            color="rgb(186, 104, 200)"
            variant="tonal"
            @click="onClickCloseDialog"
          ></v-btn>

          <v-btn
            class="btn"
            text="Добавить"
            variant="flat"
            @click="onClickAddItem"
          ></v-btn>
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
          // Проверка, что все необходимые поля заполнены
          if (!this.menuItem.name || !this.menuItem.price || !this.menuItem.orderedBy?.length) {
            shakeForm();
            return;
          }
          // Проверка, что в названии блюда только буквы (английские или русские)
          let nameRegex = /^[a-zA-Zа-яА-Я]+$/;
          if (!nameRegex.test(this.menuItem.name)) {
            alert('Пожалуйста, вводите только буквы в названии блюда');
            shakeForm();
            return;
          }
          // Проверка, что цена состоит только из цифр 
          if ((isNaN(this.menuItem.price)) || (this.menuItem.price <= 0)) {
              alert('Пожалуйста, вводите только цифры в цене');
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