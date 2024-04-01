<template>
  <v-container class="content">
    <div class="block">
      <h1>Делить - это просто!</h1>
    </div>
    <div style="width: 35%; margin: 0 auto;">
      <p>Хорошо провели время в компании, попробовали вкусные блюда вместе и не хотите проводить время с калькулятором? 
      Мы поможем вам быстро и просто рассчитать, на какую сумму поел каждый из вас!</p>
    </div>
    <v-col cols="12" md="4" sm="4" class="center-button">
      <v-btn rounded="xs" size="x-large" block class="btn">
        <router-link to="/split" class="router">ПОПРОБОВАТЬ</router-link></v-btn>
    </v-col>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" class="relative">
        <img src="@/components/logo/Ellipse1.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 25%;">
        <div style="position: relative; top: 100px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Маша не ест одна<br><br></h2>
          <p style="font-size: 25px;">Поэтому Маша обедает с коллегами. 
          Чтобы сэкономить время, они оплачивают все одним заказом.</p>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="@/components/logo/amico.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" class="relative">
        <img src="@/components/logo/Ellipse2.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 25%;">
        <div style="position: relative; top: 110px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Вот незадача<br><br></h2>
          <p style="font-size: 25px;">Маше нужно посчитать, кто сколько должен вернуть ей денег.</p>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="@/components/logo/bro.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="6" class="relative">
        <img src="@/components/logo/Ellipse3.png" alt="Первая картинка" style="max-width: 85%; position: absolute; margin-top: 35%;">
        <div style="position: relative; top: 100px; width: 80%; left: 11%;">
          <h2 style="font-size: 30px">Но все счастливы<br><br></h2>
          <p style="font-size: 25px;">Потому что знают про Сплитчек и быстро посчитают, на какую сумму пообедали.  Узнай и ты!</p>
          <v-btn rounded="xs" size="x-large" block class="btn" style="margin-top: 10%;">
            <router-link to="/about" class="router">
              Узнать подробнее
            </router-link></v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <img src="@/components/logo/amico1.png" alt="Вторая картинка" style="max-width: 100%; margin-left: 15%;">
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
    }),

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
</style>