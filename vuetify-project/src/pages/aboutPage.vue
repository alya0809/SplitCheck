<template>
    <v-container>
        <v-sheet>
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
                  <img src="@/components/logo/icon1.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                  <p style="flex: 1; font-size: 22px;">Добавь гостей</p>
              </div>
              <div style="display: flex; align-items: center; margin: 20px 0px;">
                  <img src="@/components/logo/icon2.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                  <p style="flex: 1; font-size: 22px;">Добавь позиции</p>
              </div>
              <div style="display: flex; align-items: center; margin: 20px 0px;">
                  <img src="@/components/logo/icon3.png" style="width: 50px; height: 50px; margin-right: 10px;" />
                  <p style="flex: 1; font-size: 22px;">Получи результат</p>
              </div>
          </div>
  
        </v-col>
        <v-col cols="6">
          <img src="@/components/logo/bro1.png" alt="Вторая картинка" style="max-width: 65%; margin-left: 15%;">
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