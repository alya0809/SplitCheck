<template>
  <v-app>
    <v-app-bar :elevation="0" app>
      <template v-slot:prepend>
        <v-toolbar-title>
          <img src="./components/logo/main.png" alt="Логотип" style="height: 40px">
        </v-toolbar-title>
      </template>
      <v-app-bar-title>Сплитчек</v-app-bar-title>
    
      <v-btn>Использовать</v-btn>
      <a href="#section1">
        <v-btn>О продукте</v-btn>
      </a>
      <a href="#section2">
        <v-btn>Пример работы</v-btn>
      </a>
    </v-app-bar>
    <v-main> 
      <router-view></router-view>
    </v-main>
  </v-app>
 </template>
    
<script>

</script>

<style lang="scss" scoped>

</style>