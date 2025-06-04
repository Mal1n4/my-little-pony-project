<template>
    <div class="main-content">
      <div class="hello">
        <h2 class="m-4">Книга рецептов!</h2>
        <h3 class="m-4">Здесь сохраняются все рецепты, которые тебе понравились. Что ты хочешь приготовить сегодня?</h3>
      </div>
      
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
  font-family: "Celestia Redux", serif;
  color: #525252;
}

.main-content{
  margin-top: 110px;
  display: grid;
  place-items: center;
}

</style>