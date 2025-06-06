<template>
  <div class="main-content">
    <div class="hello">
      <h2 class="m-4">Привет, дорогой друг!</h2>
      <h3 class="m-4">Наконец-то наступило лето! Понимаю, хочется освежиться. Пусть подборка необычных рецептов утолит твою жажду!</h3>
    </div>
    <img class="rainbow" src="../assets/ponies/rainb_eggnog.png" alt="Радуга в костюме" width="362px" height="221px">
    <img class="spike" src="../assets/ponies/spike_sapcake.png" alt="Спайк с сапфировым кексиком" width="119px" height="138px">
    <img class="pinki" src="../assets/ponies/pinki_punch.png" alt="Пинки пьёт сок" width="362px" height="227px">
    <li v-for="item in store.aradata" style="list-style-type: none; " class="col-4 d-flex card">
          <div class="flex-fill justify-content-center">
            <div class="name text-center p-4">
              <h3>{{ item.name }} </h3>
              <h3>{{ item.alias }} </h3>
            </div>
            <div class="d-flex justify-content-center">
              <img class="photo" :src="item['img']" alt="Изображение готового рецепта" width="352px" height="340px">
            </div>
            <div>
              <span class="time d-flex"><img src="../assets/pictos/clocks.png" alt="Часы" width="42px" height="37px"><p class="w-auto">{{ item.time }}</p></span>
              <span class="ingredients d-flex"><img src="../assets/pictos/book.png" alt="Открытая книга" width="52px" height="59px"><div><li v-for="ingr in item.ingredients">
                {{ ingr }}
              </li></div></span>
            </div>
            <span class="btns d-flex"><div class="saves"><img class="save" src="../assets/buttons/save.png" alt="Сохранить" width="173px" height="29px"><img @:click="store.statusUpdate(item); buttonUpdate(item)" class="save_hover" src="../assets/buttons/save_hover.png" alt="Сохранить" width="173px" height="29px"></div>
              <RouterLink :to="item['link']"><div class="cooks"><img class="cook" src="../assets/buttons/cook.png" alt="Готовить" width="173px" height="29px"><img class="cook_hover" src="../assets/buttons/cook_hover.png" alt="Готовить" width="173px" height="29px"></div></RouterLink></span>
          </div>
    </li>
  </div>
</template>

<style scoped>
.photo{
  border: 20px solid;
  border-image: url(../assets/recipes/img_sticker.png) 100;
}

.rainbow{
  position: absolute;
  right: 7%;
  top: 545px;
  z-index: 1;
}

.spike{
  position: absolute;
  left: 18%;
  top: 2495px;
  z-index: 1;
}

.pinki{
  position: absolute;
  right: 7%;
  top: 3550px;
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
  font-family: "Celestia Redux", serif;
  color: #525252;
}

.name{
  font-family: "Celestia Redux", serif;
  color: #525252;
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
  margin-bottom: -110px;
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
  import { PonyStore } from '../stores/store.js';
  const store = PonyStore();
  
  const buttonUpdate = (item) => {
    if(item.save_status){
    document.getElementsByClassName("save")[item.id].src = "/src/assets/buttons/saved.png"; //id рецепта должно совпадать с позицией на странице (т.е. с порядковым номером элемента класса на странице)
    document.getElementsByClassName("save_hover")[item.id].src = "/src/assets/buttons/delete.png";
    }
    else{
      document.getElementsByClassName("save")[item.id].src = "/src/assets/buttons/save.png";
      document.getElementsByClassName("save_hover")[item.id].src = "/src/assets/buttons/save_hover.png";
    }
  };

  import { onMounted } from 'vue';

  onMounted(() => {
    let l = document.getElementsByClassName("save").length;
      for (let i = 0; i < l; i++){
        buttonUpdate(store.aradata[i]);
      }
    }
  );
</script>
