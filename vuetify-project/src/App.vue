<template>
  <v-app>
    <v-app-bar :elevation="0" app color="#752382">
      <template v-slot:prepend>
        <v-toolbar-title>
          <img src="./components/logo/main.png" alt="Логотип" class="logo">
        </v-toolbar-title>
      </template>
      <v-app-bar-title><router-link to="/" class="router">СплитЧек</router-link></v-app-bar-title>
    
      <v-btn><router-link to="/split" class="router">Использовать</router-link></v-btn>
      <v-btn><router-link to="/about" class="router">О продукте</router-link></v-btn>
      <v-btn><router-link to="/example" class="router">Пример работы</router-link></v-btn>
    </v-app-bar>
    <v-main> 
      <router-view></router-view>
    </v-main>
    <v-footer color="#752382">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>SplitCheck</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
 </template>
    
<script>

</script>

<style lang="scss" scoped>

</style>