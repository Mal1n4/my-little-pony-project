<template>
  <div class="main-content">
    <div class="hello">
      <h2 class="m-4">Привет, дорогой друг!</h2>
      <h3 class="m-4">Наконец-то наступило лето! Понимаю, хочется освежиться. Пусть подборка необычных рецептов утолит твою жажду!</h3>
    </div>
    <li v-for="item in store.aradata" style="list-style-type: none; " class="col-4 d-flex card">
          <div class="flex-fill justify-content-center">
            <div class="text-center p-4">
              <h3>{{ item.name }} </h3>
              <h3>{{ item.alias }} </h3>
            </div>
            <div class="d-flex justify-content-center photo">
              <img :src="item['img']" alt="Изображение готового рецепта" width="352px" height="340px">
            </div>
            <div>
              <span class="time d-flex"><img src="../assets/pictos/clocks.png" alt="Часы" width="42px" height="37px"><p class="w-auto">{{ item.time }}</p></span>
              <span class="ingredients d-flex"><img src="../assets/pictos/book.png" alt="Открытая книга" width="52px" height="59px"><div><li v-for="ingr in item.ingredients">
                {{ ingr }}
              </li></div></span>
            </div>
            <span class="btns d-flex"><div class="saves"><img class="save" src="../assets/buttons/save.png" alt="Сохранить" width="173px" height="29px"><img class="save_hover" src="../assets/buttons/save_hover.png" alt="Сохранить" width="173px" height="29px"></div>
              <div class="cooks"><img class="cook" src="../assets/buttons/cook.png" alt="Готовить" width="173px" height="29px"><img class="cook_hover" src="../assets/buttons/cook_hover.png" alt="Готовить" width="173px" height="29px"></div></span>
          </div>
    </li>
  </div>
</template>

<style scoped>
/* .photo{
  background-color: #FFF5A6;
  border-bottom: 20px solid;
  border-image: url(../assets/recipes/wborder.png) 70;
  border-image-outset: 20px;
} */

.btns{
  margin-bottom: 55px;
  margin-left: 15.4%;
  gap: 98px;
}

.saves .save_hover {
 display: none;
}

.saves:hover .save {
 display: none
}

.saves:hover .save_hover {
 display: inline;
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.btns{
  margin-bottom: 55px;
  margin-left: 15.4%;
  gap: 98px;
}

.cooks .cook_hover {
 display: none;
}

.cooks:hover .cook {
 display: none
}

.cooks:hover .cook_hover {
 display: inline;
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

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
  background-color: #FFD863;
  margin-bottom: 110px;
  min-width: 656px;
  border: 20px solid;
  border-image: url(../assets/recipes/card_border.png) 30;
  border-image-outset: 10px;
  border-radius: 30px;
}

.main-content{
  margin-top: 110px;
  display: grid;
  place-items: center;
}

.time{
  margin-top: 60px;
  margin-bottom: 40px;
  margin-left: 15.4%;
  gap: 20px;
}

.ingredients{
  margin-bottom: 40px;
  margin-left: 14%;
  gap: 20px;
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
