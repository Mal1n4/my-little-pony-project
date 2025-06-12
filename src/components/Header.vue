<script setup lang="js">
  import logoSrc from '../assets/little-pony-logo.png'
  import profileSrc from '../assets/ava.jpg'
  import foodSrc from '../assets/apple_pie.png'
  import drinkSrc from '../assets/cider.png'
  import favSrc from '../assets/apples.png'
  import Auth from '../components/AuthPopup.vue'

  import { ref } from 'vue';

  const Visible = ref(false);

  const Popup = () => {
    Visible.value = !Visible.value;
  };
</script>

<template>
  <nav class="navbar navbar-expand navbar-light">
            <div class="w-100 justify-content-center">
                <div class="container align-items-center justify-content-center">
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item col-2">
                            <RouterLink to="/"> <img class="img-logo-md img-logo-sm" :src="logoSrc" alt="logo" width="124px" height="73px"></RouterLink>
                        </li>
                        <li class="nav-item col-8 d-flex justify-content-around align-items-center">
                          <RouterLink to="/food"> <div class="d-flex justify-content-start align-items-center gap-2">
                              <h5 class="nav-text">Еда</h5>
                              <img class="img-food-md img-food-sm" :src="foodSrc" alt="food" width="63px" height="55px">
                            </div> </RouterLink>

                            <RouterLink to="/drinks"><div class="d-flex justify-content-center align-items-center gap-2">
                              <h5 class="nav-text">Напитки</h5>
                              <img class="img-drinks-md img-drinks-sm" :src="drinkSrc" alt="drinks" width="59px" height="55px">
                            </div> </RouterLink>

                            <RouterLink to="/favorites"><div class="d-flex justify-content-end align-items-center gap-2">
                              <h5 class="nav-text">Избранное</h5>
                              <img class="img-favs-md img-favs-sm" :src="favSrc" alt="favs" width="55px" height="55px">
                            </div> </RouterLink>
                        </li>
                        <li class="nav-item col-2 d-flex justify-content-end align-items-center gap-2" @click="Popup">
                            <h5 class="nav-text">Профиль</h5>
                            <img class="img-profile-md img-profile-sm" :src="profileSrc" alt="profile" width="88px" height="55px">
                        </li>
                    </ul>
                </div>
            </div>
  </nav>
  <Auth v-show="Visible" class="popup"></Auth>
</template>

<style scoped>
.popup{
  position: fixed;
  left: 33%;
  top: 5%; 
  box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
  z-index: 2;
}

nav {
  background-color: #FFF377;
  height: 90px;
  border: 30px solid;
  border-image: url(../assets/border.png) 30;
  border-image-outset: 10px;
  font-family: "Celestia Redux", serif;
}

nav h5:hover{
  color: #E01D76;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

@media (max-width: 1000px){
  .popup{
    position: fixed;
    left: 15%;
    box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
    z-index: 2;
  }

  nav {
    height: 60px;
    border: 20px solid;
    border-image: url(../assets/border.png) 30;
    border-image-outset: 10px;
  }

  .nav-text{
    font-size: 16px;
  }

  .img-logo-md {
    width: auto;
    height: 50px;
  }

  .img-profile-md, .img-food-md, .img-drinks-md, .img-favs-md {
    width: auto;
    height: 30px;
  }
}

@media (max-width: 770px){
  .nav-text{
    font-size: 10px;
  }
}

@media (max-width: 576px){
  .popup{
    position: fixed;
    left: 20%;
    box-shadow: 1px 1px 100px 100px rgba(118, 133, 40, 0.2);
    z-index: 2;
  }

  nav {
    height: 30px;
    border: 10px solid;
    border-image: url(../assets/border.png) 30;
    border-image-outset: 5px;
  }

  .img-logo-md {
    width: auto;
    height: 30px;
  }

  .nav-text{
    font-size: 10px;
  }

  .img-profile-md, .img-food-md, .img-drinks-md, .img-favs-md {
    width: auto;
    height: 15px;
  }

}
@media (max-width: 380px){
  .nav-text{
    font-size: 8px;
  }
}
</style>
