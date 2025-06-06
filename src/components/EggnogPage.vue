<template>
  <div class="main-content">
    <div class="col-4 d-flex card">
        <div class="flex-fill justify-content-center">
            <div class="name text-center p-4">
              <h3>{{ store.aradata[0].episode_name }} </h3>
              <h3>{{ store.aradata[0].episode }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img class="photo" :src="store.aradata[0]['episode_img']" alt="Скриншот из серии" width="656px" height="369px">
            </div>
            <div class="comment">
                <li v-for="comment in store.aradata[0].episode_comment" class="py-2">
                    {{ comment }}
                </li>
            </div>
        </div>
    </div>
    <div class="fact">
      <img class="cloud" src="../assets/recipes/cloud.png" alt="Облако" width="446px" height="468px">
      <div class="fact-text">
        <h3 class="pink-text">Интересный факт</h3>
        <li v-for="item in store.aradata[0].fact" >
                    <h5>{{ item }}</h5>
        </li>
      </div>
    </div>
    <img class="rainbow" src="../assets/ponies/rainb_eggnog.png" alt="Радуга в костюме" width="362px" height="221px">
    <div class="col-4 d-flex card">
          <div class="flex-fill justify-content-center">
            <div class="name text-center p-4">
              <h3>{{ store.aradata[0].name }} </h3>
              <h3>{{ store.aradata[0].alias }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img class="photo" :src="store.aradata[0]['img']" alt="Изображение готового рецепта" width="352px" height="340px">
            </div>
            <div>
              <span class="time d-flex"><img src="../assets/pictos/clocks.png" alt="Часы" width="42px" height="37px"><p class="w-auto">{{ store.aradata[0].time }}</p></span>
              <span class="ingredients d-flex"><img src="../assets/pictos/book.png" alt="Открытая книга" width="52px" height="59px"><div><li v-for="ingr in store.aradata[0].ingredients">
                {{ ingr }}
              </li></div></span>
              <span class="cooking d-flex"><img src="../assets/pictos/cook.png" alt="Венчик и поварской колпак" width="76px" height="49px"><div><li v-for="step in store.aradata[0].cooking" class="py-2">
                {{ step }}
              </li></div></span>
            </div>
            <span class="btns d-flex"><div class="saves"><img class="save" src="../assets/buttons/save.png" alt="Сохранить" width="173px" height="29px"><img class="save_hover" src="../assets/buttons/save_hover.png" alt="Сохранить" width="173px" height="29px"></div>
              <div class="print"><img class="typewr" src="../assets/buttons/print.png" alt="Печать" width="173px" height="29px"><img class="typewr_hover" src="../assets/buttons/print_hover.png" alt="Печать" width="173px" height="29px"></div></span>
          </div>
        </div>
  </div>
</template>

<style scoped>
.fact{
  position: absolute;
  top: 850px;
  z-index: 1;
  left: 150px;
}

.pink-text{
  color: #E13181;
}

.fact-text{
  width: 316px;
  display: grid;
  text-align: center;
  font-family: "Celestia Redux", serif;
  position: relative;
  bottom: 315px;
  left: 75px;
  rotate: 5deg;
  list-style-type: none; 
}

.comment{  
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  max-width: 437px;
  margin-left: 16%;
  margin-top: 45px;
  margin-bottom: 55px;
  list-style-type: none; 
}

.photo{
  border: 20px solid;
  border-image: url(../assets/recipes/img_sticker.png) 100;
}

.rainbow{
  position: absolute;
  right: 7%;
  top: 1113.5px;
  z-index: 1;
}

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

.print .typewr_hover {
 display: none;
}

.print:hover .typewr {
 display: none
}

.print:hover .typewr_hover {
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
  font-family: "Celestia Redux", serif;
  color: #525252;
}

.name{
  font-family: "Celestia Redux", serif;
  color: #525252;
  list-style-type: none; 
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
  font-family: "Involve Medium", sans-serif;
  color: #525252;
}

.ingredients{
  margin-bottom: 40px;
  margin-left: 14%;
  gap: 20px;
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  list-style-type: none; 
}

.cooking{
  margin-bottom: 40px;
  margin-left: 12%;
  gap: 9px;
  font-family: "Involve Medium", sans-serif;
  color: #525252;
  list-style-type: none; 
  max-width: 405px;
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
