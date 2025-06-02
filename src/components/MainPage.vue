<template>
  <div class="main-content">
    <div class="hello">
      <h2 class="mb-4">Привет, дорогой друг!</h2>
      <h3>Наконец-то наступило лето! Понимаю, хочется освежиться. Пусть подборка необычных рецептов утолит твою жажду!</h3>
    </div>
    <li v-for="item in store.aradata" style="list-style-type: none; " class="col-4 d-flex mb-5 card">
          <div class="flex-fill justify-content-center">
            <div class="text-center">
              <h3>{{ item.name }} </h3>
              <h3>{{ item.alias }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img :src="item['img']" alt="Изображение готового рецепта" width="352px" height="340px">
            </div>
            <div>
              <p class="time">{{ item.time }}</p>
              <li v-for="ingr in item.ingredients">
                {{ ingr }}
              </li>
            </div>
          </div>
    </li>
  </div>
</template>

<style scoped>
.hello{
  background-color: #FFD863;
  height: auto;
  margin-bottom: 110px;
  max-width: 656px;
  border: 20px solid;
  border-image: url(../assets/recipes/border.png) 30;
  border-image-outset: 10px;
  text-align: center;
}

.card{
  background-color: #FFF5A6;
  min-width: 656px;
  border: 20px solid;
  border-image: url(../assets/recipes/card_border.png) 30;
  border-image-outset: 10px;
  border-radius: 30px;
}

.main-content{
  margin-top: 110px;
  margin-bottom: 110px;
  display: grid;
  place-items: center;
}

.time{
  margin-bottom: 40px;
}

#list {
  margin-left: 24.3%;
}

.contact{
  margin-left: 48%;
}

.router-link-exact-active,
.router-link-active {
  color: inherit; 
  text-decoration: none; 
}

a {
  color: inherit; 
  text-decoration: none; 
}
</style>

<script setup>
  import { PonyStore } from '../stores/store.js'
  const store = PonyStore()
</script>
