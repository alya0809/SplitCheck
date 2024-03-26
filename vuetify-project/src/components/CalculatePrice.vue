<template>
    <div>
        <h1>Распределение стоимости</h1>
        <v-btn @click="calculateCost" color="rgb(186, 104, 200)">Рассчитать стоимость</v-btn>
        <div v-if="Object.keys(costPerGuest).length > 0">
            <ul>
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
            this.costPerGuest = {};

            this.guests.forEach(guest => {
                this.costPerGuest[guest] = 0;
            });

            this.menuItems.forEach(menuItem => {
                const guestsCount = menuItem.orderedBy.length;
                const costPerGuest = menuItem.price / guestsCount;

                menuItem.orderedBy.forEach(guest => {
                    this.costPerGuest[guest] += costPerGuest;
                });
            });
            
            console.log(this.costPerGuest);
        }
    }
};
</script>
