<template>
  <div>
    <v-container class="container">
      <v-sheet>
        <div class="block block1" >
          <p class="text">
            Сервис "Сплитчек" предназначен для удобного расчета стоимости блюд для каждого, кто заказал себе еду в общем чеке. Не нужно
            регистрироваться, платить и покупать что-либо. Все, что требуется - доступ в интернет. Для того, чтобы получить результат, необходимо:
          </p> 
          <p class="text list">
              1. Ввести всех гостей<br>
              2. Ввести все позиции<br>
              3. Нажать на кнопку "Расчет стоимости".
          </p>
        </div>
      </v-sheet> 
    </v-container>
  
    <v-container class="container">
      <v-row>
        <v-col cols="6">
          <p class="h2">
            Всего 3 простых действия
          </p>
          <p>И ты супер крут!</p>
          <div class="main-div">
            <div class="subject-div">
              <img src="@/images/icon1.png"/>
              <p>Добавь гостей</p>
            </div>
            <div class="subject-div">
              <img src="@/images/icon2.png"/>
              <p>Добавь позиции</p>
            </div>
            <div class="subject-div">
              <img src="@/images/icon3.png"/>
              <p>Получи результат</p>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <img 
            src="@/images/bro1.png" 
            alt="Вторая картинка" 
            class="img-alone">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
