<template>
  <v-app>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-toolbar-title>
        <img src="./components/logo/main.png" alt="Логотип" style="height: 40px">
      </v-toolbar-title>
    </template>
    <v-app-bar-title>Сплитчек</v-app-bar-title>
    <v-sheet id="section0" class="anchor-section">
    </v-sheet>
    <v-btn @click="$scrollTo('#section0')">Использовать</v-btn>
    <v-sheet id="section1" class="anchor-section">
    </v-sheet>
    <v-btn @click="$scrollTo('#section1')">О продукте</v-btn>

    <v-sheet id="section2" class="anchor-section">
    </v-sheet>
    <v-btn @click="$scrollTo('#section2')">Пример работы</v-btn>

    <v-sheet id="section3" class="anchor-section">
    </v-sheet>
    <v-btn @click="$scrollTo('#section3')">Наша команда</v-btn>
  </v-app-bar>

  <v-container class="text-center" style="margin-top: 64px;">
    <div style= "margin-top: 20px">
      <h1>Делить - это просто!</h1>
    </div>
    <div style="width: 35%; margin: 0 auto;">
      <p>Хорошо провели время в компании, попробовали вкусные блюда вместе и не хотите проводить время с калькулятором? 
      Мы поможем вам быстро и просто рассчитать, на какую сумму поел каждый из вас!</p>
    </div>
    <v-col cols="12" md="4" sm="4" class ="center-button">
      <v-btn rounded="xs" size="x-large" block color="rgb(186, 104, 200)">ПОПРОБОВАТЬ</v-btn>
    </v-col>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" style="position: relative;">
        <img src="./components/logo/Ellipse1.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 25%;">
        <div style="position: relative; top: 100px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Маша не ест одна<br><br></h2>
          <p style="font-size: 25px;">Поэтому Маша обедает с коллегами. 
          Чтобы сэкономить время, они оплачивают все одним заказом.</p>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="./components/logo/amico.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" style="position: relative;">
        <img src="./components/logo/Ellipse2.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 25%;">
        <div style="position: relative; top: 110px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Вот незадача<br><br></h2>
          <p style="font-size: 25px;">Маше нужно посчитать, кто сколько должен вернуть ей денег.</p>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="./components/logo/bro.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" style="position: relative;">
        <img src="./components/logo/Ellipse3.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 35%;">
        <div style="position: relative; top: 100px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Но все счастливы<br><br></h2>
          <p style="font-size: 25px;">Потому что знают про Сплитчек и быстро посчитают, на какую сумму пообедали.  Узнай и ты!</p>
          <v-sheet id="section4" class="anchor-section">
          </v-sheet>
          <v-btn rounded="xs" size="x-large" block color="rgb(186, 104, 200)" style="margin-top: 10%;">Узнать подробнее</v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="./components/logo/amico1.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <div style="max-width: 90%;">
      <p style="font-size: 25px;">Сервис "Сплитчек" предназначен для удобного расчета стоимости блюд для каждого члена трапезы, если чек общий. Не нужно
        регистрироваться, платить и покупать что-либо. Все, что требуется - доступ в интернет. Для того, чтобы получить результат, необходимо:<br>
        1. Ввести всех гостей<br>
        2. Ввести все позиции<br>
        3. Нажать на кнопку "Получить расчет".
      </p>
    </div>
  </v-container>
  
</v-app>
</template>

<script setup>
  //
</script>

<style>
  .center-button {
      margin: 0 auto; /* автоматическое выравнивание по горизонтали */
      color: rgb(186, 104, 200);
}
</style>