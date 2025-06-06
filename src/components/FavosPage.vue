<template>
    <div class="main-content">
      <div class="hello">
        <h2 class="m-4">Книга рецептов!</h2>
        <h3 class="m-4">Здесь сохраняются все рецепты, которые тебе понравились. Что ты хочешь приготовить сегодня?</h3>
      </div>
      <img class="spike-favs" src="../assets/ponies/spike_favs.png" alt="Спайк в поварском колпаке с противнем" width="149" height="150">
      <li class="recipe" v-for="recipe in store.aradata.filter((item) => item.save_status == 1)" style="list-style-type: none; ">
        <span class="d-flex"><img class="min_photo" :src="recipe['img']" alt="Фото готового рецепта">
          <div class="action justify-content-center">
            <h3>{{ recipe.name }}</h3>
            <h3>{{ recipe.alias }}</h3>
            <div class="buttons d-flex">
              <RouterLink :to="recipe['link']">
                <div class="cooks"><img class="cook" src="../assets/buttons/cook.png" alt="Готовить" width="173px" height="29px"><img class="cook_hover" src="../assets/buttons/cook_hover.png" alt="Готовить" width="173px" height="29px"></div>
              </RouterLink>
              <div class="deletes">
                <img class="delete" src="../assets/buttons/delete.png" alt="Удалить" width="173px" height="29px"><img @:click="store.statusUpdate(recipe);" class="delete_hover" src="../assets/buttons/delete_hover.png" alt="Удалить" width="173px" height="29px">
              </div>
            </div>
          </div>
        </span>
      </li>
      <img class="pinkie-cooks" src="../assets/ponies/pinkie_cooks.png" alt="Пинки готовит" width="244" height="250">
    </div>
</template>

<style scoped>
.spike-favs{
  position: absolute;
  left: 1125px;
  bottom: 260px;
  z-index: 1;
}

.pinkie-cooks{
  position: relative;
  right: 485px;
  bottom: 280px;
  z-index: 1;
}

.buttons{
  margin-top: 30px;
  gap: 90px;
}

.action{
  width: 437px;
  align-content: center;
}

.min_photo{
  width: 146px;
  height: 146px;
  margin-right: 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.recipe{
  width: 656px;
  background-color: #FFD863;
  height: 176px;
  margin-bottom: 55px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Celestia Redux", serif;
  color: #525252;
  border: 20px solid;
  border-image: url(../assets/recipes/border.png) 30;
  border-image-outset: 10px;
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

.main-content{
  margin-top: 110px;
  display: grid;
  place-items: center;
  margin-bottom: -250px;
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

.deletes .delete_hover {
 display: none;
}

.deletes:hover .delete {
 display: none
}

.deletes:hover .delete_hover {
 display: inline;
 border-radius: 4px;
 box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
}

</style>

<script setup>
  import { PonyStore } from '../stores/store.js';
  const store = PonyStore();
  
</script>