<template>
  <div>
    <v-container class="content">
      <div class="block">
        <h1>
          Делить - это просто!
        </h1>
      </div>
      <div class="head">
        <p>
          Хорошо провели время в компании, попробовали вкусные блюда вместе и не хотите проводить время с калькулятором? 
          Мы поможем вам быстро и просто рассчитать, на какую сумму поел каждый из вас!
        </p>
      </div>
      <v-col 
        cols="12" 
        md="4" 
        sm="4" 
        class="center-button"
      >
        <v-btn 
          rounded="xs" 
          size="x-large" 
          block class="btn"
        >
          <router-link 
            to="/split" 
            class="router"
          >
            ПОПРОБОВАТЬ
          </router-link>
        </v-btn>
      </v-col>
    </v-container>
    <v-container>
      <v-row>
        <v-col 
          cols="6" 
          class="relative"
        >
          <img 
            src="@/images/Ellipse1.png" 
            class="img-components"
          >
          <div class="heading">
            <h2>
              Маша не ест одна
            </h2>
            <p>
              Поэтому Маша обедает с коллегами. 
              Чтобы сэкономить время, они оплачивают все одним заказом.
            </p>
          </div>
        </v-col>
        <v-col cols="6">
          <img 
            src="@/images/amico.png" 
            alt="Вторая картинка" 
            class="img-components2"
          >
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col 
          cols="6" 
          class="relative"
        >
          <img 
            src="@/images/Ellipse2.png" 
            class="img-components"
          >
          <div class="heading">
            <h2>
              Вот незадача
            </h2>
            <p>
              Маше нужно посчитать, кто сколько должен вернуть ей денег.
            </p>
          </div>
        </v-col>
        <v-col cols="6">
          <img 
            src="@/images/bro.png" 
            alt="Вторая картинка" 
            class="img-components2"
          >
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col 
          cols="6" 
          class="relative"
        >
          <img 
            src="@/images/Ellipse3.png" 
            class="img-components img3" 
          >
          <div class="heading">
            <h2>
              Но все счастливы
            </h2>
            <p>
              Потому что знают про Сплитчек и быстро посчитают, на какую сумму пообедали.  Узнай и ты!
            </p>
            <v-btn 
              rounded="xs" 
              size="x-large" 
              block class="btn"
            >
              <router-link 
                to="/about" 
                class="router"
              >
                Узнать подробнее
              </router-link>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6">
          <img 
            src="@/images/amico1.png" 
            alt="Вторая картинка" 
            class="img-components2"
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>
