<template>
    <div>
        <v-dialog v-model="dialogCost" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
            <v-col cols="auto">
                <v-btn class="btn"
                prepend-icon="mdi-cash-check"
                text="Расчет стоимости"
                density="default"
                v-bind="activatorProps"
                ></v-btn>
            </v-col>
            </template>
    
            <v-card class="purple-border" outlined prepend-icon="mdi-cash-check" title="Расчет стоимости">
                <div v-if="Object.keys(costPerGuest).length > 0">
                    <ul class="bordered-list">
                        <li v-for="(cost, guest) in costPerGuest" :key="guest">
                            {{ guest }} - {{ cost }}
                        </li>
                    </ul>
                </div>
    
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="rgb(186, 104, 200)"
                text="Закрыть"
                variant="tonal" 
                @click="dialogCost = false"
                ></v-btn>
    
                <v-btn
                class="btn"
                text="Рассчитать"
                variant="flat"
                @click="calculateCost"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
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
            dialogCost: false
        };
    },
    methods: {
        calculateCost() {
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
    }
};
</script>
<style>
    .bordered-list li{
        padding: 15px;
        border: 4px solid rgb(186, 104, 200);
        border-radius: 10px;
        margin: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
</style>
