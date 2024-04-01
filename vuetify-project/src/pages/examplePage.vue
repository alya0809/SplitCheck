<template>
    <p class="example">Пример работы</p>
    <v-carousel hide-delimiters class="carousel">
      <v-carousel-item
          v-for="(photo, index) in photos"
            :key="index"
            :src="photo.src"
            contain
      ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data: () => ({
            photos: [
              { src: 'https://sun9-55.userapi.com/impg/Ofg0zNYRrmE2wXOor1TnKgUPtU8p3ZYODtifEg/0pN-Y9oAqrg.jpg?size=1895x831&quality=96&sign=784007afe0021eccad69db8a8206858b&type=album', },
              { src: 'https://sun9-42.userapi.com/impg/VQo3BvqDojQwakJ-BBg24xXu2eVbCU3pOCVecw/c8HquBtOBfw.jpg?size=1896x845&quality=96&sign=4519adc251e7cdcad530e909341416f3&type=album', },
              { src: 'https://sun9-7.userapi.com/impg/W63k1oblwQMeaX1dbZgB1qzf1F1AWsPuy9G5Cw/ajk22EATmJs.jpg?size=1895x915&quality=96&sign=5b67cd80ecac8be89dc85a3c434f0627&type=album', },
              { src: 'https://sun9-43.userapi.com/impg/f55QMSJoK-Bt630zh9AkphZs7dcUfCK7AYFVjA/HIddXXkPlek.jpg?size=1893x913&quality=96&sign=28774090d8ba56c34c9795bcf08e2987&type=album', },
              { src: 'https://sun9-57.userapi.com/impg/SXfZo0Tq9U-gI5YYBIx0Rysf8St7wdG8Od9JWA/ym0oVg_Uknw.jpg?size=1899x911&quality=96&sign=81e2c5e3b2b6595e2411b5f3d8ada031&type=album', },
              { src: 'https://sun9-78.userapi.com/impg/YdYhHlce7yZ0aj2IuM-IoR1VwCF0wqEWHv6Hwg/3cMfVpAkTQU.jpg?size=1895x912&quality=96&sign=919bfe68e1ed17fa87f5ac5f9a70b6a9&type=album', }
            ],
            }),
    }
</script>

<style lang="scss" scoped>

</style>