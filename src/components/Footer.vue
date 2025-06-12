<template>
    <footer class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="d-flex justify-content-start ms-4">Сайт был разработан в учебных целях Алиной в 2025 году</p>
          <div class="d-flex justify-content-end align-items-center gap-5 me-4">
            <div class="ninjas"><img class="ninja" src="../assets/logos/ninja_black.png" alt="Черепашки ниндзя рецепты" width="111px" height="70px"><img class="ninja_hover" src="../assets/logos/ninja.png" alt="Черепашки ниндзя рецепты" width="111px" height="70px"></div>
            <div class="scoobies"><img class="scooby" src="../assets/logos/scooby_black.png" alt="Скуби-Ду рецепты" width="133px" height="44px"><img class="scooby_hover" src="../assets/logos/scooby.png" alt="Скуби-Ду рецепты" width="133px" height="44px"></div>
            <img src="../assets/logos/vk.png" alt="Ссылка на вк" width="36px" height="36px" class="ms-4 vk">
          </div>
    </footer>
</template>

<style scoped>
  footer{
    background-color: #FFF377;
    height: 147px;
    border: 20px solid;
    border-image: url(../assets/border_f.png) 30;
    border-image-outset: 10px;
    margin-top: 110px;
    font-family: "Celestia Redux", serif;
    color: #000000;
  }

  .ninjas .ninja_hover{
  display: none;
  }

  .ninjas:hover .ninja{
  display: none
  }

  .ninjas:hover .ninja_hover{
  display: inline;
  }

  .scoobies .scooby_hover{
  display: none;
  }

  .scoobies:hover .scooby{
  display: none
  }

  .scoobies:hover .scooby_hover{
  display: inline;
  }

  @media (max-width: 1000px){
    footer{
      height: 200px;
      border: 10px solid;
      border-image: url(../assets/border_f.png) 30;
      border-image-outset: 5px;
      font-family: "Celestia Redux", serif;
      color: #000000;
    }
  }

  @media (max-width: 576px){
    footer img{
      width: 100px;
      height: auto;
    }

    footer .vk{
      width: 30px;
      height: auto;
    }
  }

</style>