//calculation and output of the total cost
<template>
  <v-container class="pa-4 text-center">
    <v-dialog v-model="isDialogCostOpen" max-width="600">
      <template #activator="{ props: activatorProps }">
        <v-col cols="auto">
            <v-btn 
              class="btn"
              prepend-icon="mdi-cash-check"
              text="Расчет стоимости"
              v-bind="activatorProps"
            >
            </v-btn>
        </v-col>
      </template>
      <v-card 
        class="purple-border" 
        outlined 
        prepend-icon="mdi-cash-check" 
        title="Расчет стоимости"
      >
        <div v-if="Object.keys(costPerGuest)">
          <ul class="bordered-list">
            <li
              v-for="(cost, guest) in costPerGuest" 
              :key="guest.id"
            >
                {{ guest }} - {{ cost }}
            </li>
          </ul>
        </div>

        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn 
            color="rgb(186, 104, 200)"
            text="Закрыть"
            variant="tonal" 
            @click="closeDialogCost"
          >
          </v-btn>
          <v-btn
            class="btn"
            text="Рассчитать"
            variant="flat"
            @click="calculateCost"
          >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
  
<script>
  import {shakeForm} from "@/service/shakeForm.js"
  export default {
    props: {
        menuItems: {
          type: Array,
          required: true
        },
        guests: {
          type: Array,
          required: true
        }
    },
    data() {
      return {
          costPerGuest: {},
          isDialogCostOpen: false
      };
    },
    methods: {
      calculateCost() { //function for calculating the total cost
        if (this.menuItems.length === 0 || this.guests.length === 0) {
          const calculateButton = document.querySelector('.btn');
          shakeForm();

          setTimeout(() => {
            calculateButton.classList.remove('shake-animation');
          }, 1000);

          alert('Пожалуйста, добавьте хотя бы одного гостя/позицию в меню!');
      } else {
          let costPerGuest = {};
          this.menuItems.forEach(menuItem => {
            const pricePerPerson = (menuItem.price / menuItem.orderedBy.length);
            menuItem.orderedBy.forEach(guest => {
              if (costPerGuest[guest]) {
                  costPerGuest[guest] += pricePerPerson;
              } else {
                  costPerGuest[guest] = pricePerPerson;
              }
              costPerGuest[guest] = Number(costPerGuest[guest].toFixed(2));
            });
          });
          this.costPerGuest = costPerGuest;
        }
      },
      closeDialogCost() { //function to close the dialog
        if (Object.keys(this.costPerGuest).length === 0) {
          this.isDialogCostOpen = false;
        } else {
          if (confirm('Вы уверены, что хотите закрыть окно? Расчет стоимости будет потерян.')) {
              this.costPerGuest = {};
              this.isDialogCostOpen = false;
          }
        }
      }
    }
  };
</script>
