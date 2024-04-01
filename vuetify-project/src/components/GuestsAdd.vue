<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialogGuest" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-col cols="auto">
          <v-btn 
            class="btn"
            prepend-icon="mdi-account"
            text="Добавить гостя"
            density="default"
            v-bind="activatorProps"
          ></v-btn>
        </v-col>
      </template>

      <v-card class="purple-border" outlined prepend-icon="mdi-account" title="Добавить гостя">
        <v-card-text>
          <v-row dense>
            <v-col color="rgb(232, 206, 237)">
              <v-text-field 
              v-model="guest.name"
              label="Имя*" 
              required
              :class="{ 'error': !guest.name }"
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*Обязательное поле</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Закрыть"
            color="rgb(186, 104, 200)" 
            variant="tonal" 
            @click="dialogGuest = false"
          ></v-btn>

          <v-btn
            class="btn"
            text="Добавить"
            @click="addGuests"
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
        },
        dialogGuest: false
      }
    },
    methods: {
      addGuests() {
        if (!this.guest.name) {
          this.shakeForm();
          return;
        }
        this.guest.id = Date.now();
        this.$emit('create', this.guest)
        this.guest = {
          name: ''
        }
      },
      shakeForm() {
        const form = document.querySelector('.purple-border');
        form.classList.add('shake');
        setTimeout(() => {
          form.classList.remove('shake');
        }, 500);
      }
    }
  }
  </script>
  
<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
    }
    .purple-border {
    border: 4px solid rgb(186, 104, 200);
    border-radius: 16px; /* Добавим скругленные углы */
    padding: 10px;
    &.shake {
    animation: shake 0.5s;
  }

    @keyframes shake {
      10%, 90% {
        transform: translateX(-5px);
      }
      20%, 80% {
        transform: translateX(5px);
      }
      30%, 50%, 70% {
        transform: translateX(-3px);
      }
      40%, 60% {
        transform: translateX(3px);
      }
    }
  }
</style>