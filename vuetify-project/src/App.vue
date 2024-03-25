<template>
  <v-app>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-toolbar-title>
        <img src="./components/logo/main.png" alt="Логотип" style="height: 40px">
      </v-toolbar-title>
    </template>
    <v-app-bar-title>Сплитчек</v-app-bar-title>
   
    <v-btn @click="$scrollTo('#section0')">Использовать</v-btn>
    <a href="#section1">
      <v-btn>О продукте</v-btn>
    </a>
    <a href="#section2">
      <v-btn>Пример работы</v-btn>
    </a>
  </v-app-bar>

  <v-container class="text-center" style="margin-top: 64px;">
    <div style="margin-top: 20px">
      <h1>Делить - это просто!</h1>
    </div>
    <div style="width: 35%; margin: 0 auto;">
      <p>Хорошо провели время в компании, попробовали вкусные блюда вместе и не хотите проводить время с калькулятором? 
      Мы поможем вам быстро и просто рассчитать, на какую сумму поел каждый из вас!</p>
    </div>
    <v-col cols="12" md="4" sm="4" class="center-button">
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
          <a href="section1"><v-btn rounded="xs" size="x-large" block color="rgb(186, 104, 200)" style="margin-top: 10%;">Узнать подробнее</v-btn></a>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="./components/logo/amico1.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  
    <v-container>
      <v-sheet id="section1" class="anchor-section">
        <div style="max-width: 90%; margin-top: 20px">
          <p style="font-size: 25px;">Сервис "Сплитчек" предназначен для удобного расчета стоимости блюд для каждого члена трапезы, если чек общий. Не нужно
            регистрироваться, платить и покупать что-либо. Все, что требуется - доступ в интернет. Для того, чтобы получить результат, необходимо:<br>
            1. Ввести всех гостей<br>
            2. Ввести все позиции<br>
            3. Нажать на кнопку "Получить расчет".
          </p> 
        </div>
      </v-sheet> 
    </v-container>
  
  <v-container>
    <v-row>
      <v-col cols="6">
        <h2 style="font-size: 30px;">Всего 3 простых действия<br></h2>
        <h2 style="font-size: 25px">И ты супер крут!</h2>
        <div style="display: flex; align-items: flex-start; flex-wrap: wrap; flex-direction: column;">
            <div style="display: flex; align-items: center; margin: 20px 0px;">
                <img src="./components/logo/icon1.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                <p style="flex: 1; font-size: 22px;">Добавь гостей</p>
            </div>
            <div style="display: flex; align-items: center; margin: 20px 0px;">
                <img src="./components/logo/icon2.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                <p style="flex: 1; font-size: 22px;">Добавь позиции</p>
            </div>
            <div style="display: flex; align-items: center; margin: 20px 0px;">
                <img src="./components/logo/icon3.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                <p style="flex: 1; font-size: 22px;">Получи результат</p>
            </div>
        </div>

      </v-col>
      <v-col cols="6">
        <img src="./components/logo/bro1.png" alt="Вторая картинка" style="max-width: 65%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-sheet id="section2" class="anchor-section">
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
  
</v-app>
</template>

<script>
  export default {
    data: () => ({
      photos: [
        { src: 'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg', },
        { src: 'https://admin.redmuseum.church/wp-content/uploads/2020/06/1-61.jpg',}, 
        { src: 'https://takiedela.ru/wp-content/uploads/2024/03/4c338cf556d683b10e92791c86e7cb97.jpg'}
      ],
      dialog: false,
    }),
    methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId.substr(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  }
</script>

<style>
  .center-button {
      margin: 0 auto; /* автоматическое выравнивание по горизонтали */
      color: rgb(186, 104, 200);
  }
  .v-window {
    max-width: 100%;
    max-height: 100%;
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }
  .prim {

  }

</style>