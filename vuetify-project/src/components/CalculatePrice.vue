<template>
    <div>
        <h1>Распределение стоимости</h1>
        <v-btn @click="calculateCost" color="rgb(186, 104, 200)">Рассчитать стоимость</v-btn>
        <div v-if="Object.keys(costPerGuest).length > 0">
            <ul class="bordered-list">
                <li v-for="(cost, guest) in costPerGuest" :key="guest">
                    {{ guest }} - {{ cost }} руб.
                </li>
            </ul>
        </div>
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
            costPerGuest: {}
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
