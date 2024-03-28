<template>
    <v-sheet>
        <h2 class="text-center">Пример работы</h2>
      </v-sheet>
    <v-carousel hide-delimiters style="max-width: 800px; margin: 20px auto;">
      <v-carousel-item
          v-for="(photo, index) in photos"
            :key="index"
            :src="photo.src"
            cover
      ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data: () => ({
            photos: [
                { src: 'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg', },
                { src: 'https://admin.redmuseum.church/wp-content/uploads/2020/06/1-61.jpg',}, 
                { src: 'https://takiedela.ru/wp-content/uploads/2024/03/4c338cf556d683b10e92791c86e7cb97.jpg'}
            ],
            }),
    }
</script>

<style lang="scss" scoped>

</style>