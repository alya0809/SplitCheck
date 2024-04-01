<template>
    <v-container>
        <v-sheet>
          <div class="block">
            <p class="text">Сервис "Сплитчек" предназначен для удобного расчета стоимости блюд для каждого, кто заказал себе еду в общем чеке. Не нужно
              регистрироваться, платить и покупать что-либо. Все, что требуется - доступ в интернет. Для того, чтобы получить результат, необходимо:<br>
              1. Ввести всех гостей<br>
              2. Ввести все позиции<br>
              3. Нажать на кнопку "Расчет стоимости".
            </p> 
          </div>
        </v-sheet> 
      </v-container>
  
    <v-container>
      <v-row>
        <v-col cols="6">
          <h2 class="text-h2">Всего 3 простых действия<br></h2>
          <p class="text">И ты супер крут!</p>
          <div class="main-div">
              <div class="subject-div">
                  <img src="@/components/logo/icon1.png"/>
                  <p>Добавь гостей</p>
              </div>
              <div class="subject-div">
                  <img src="@/components/logo/icon2.png"/>
                  <p>Добавь позиции</p>
              </div>
              <div class="subject-div">
                  <img src="@/components/logo/icon3.png"/>
                  <p>Получи результат</p>
              </div>
          </div>
  
        </v-col>
        <v-col cols="6">
          <img src="@/components/logo/bro1.png" alt="Вторая картинка" class="img-alone">
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>