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
                        <li class="nav-item col-2 ">
                            <RouterLink to="/"> <img :src="logoSrc" alt="logo" width="124px" height="73px"></RouterLink>
                        </li>
                        <li class="nav-item col-8 d-flex justify-content-around align-items-center">
                          <RouterLink to="/food"> <div class="d-flex justify-content-start align-items-center gap-2">
                              <h5>Еда</h5>
                              <img :src="foodSrc" alt="food" width="63px" height="55px">
                            </div> </RouterLink>

                            <RouterLink to="/drinks"><div class="d-flex justify-content-center align-items-center gap-2">
                              <h5>Напитки</h5>
                              <img :src="drinkSrc" alt="drinks" width="59px" height="55px">
                            </div> </RouterLink>

                            <RouterLink to="/favorites"><div class="d-flex justify-content-end align-items-center gap-2">
                              <h5>Избранное</h5>
                              <img :src="favSrc" alt="favs" width="55px" height="55px">
                            </div> </RouterLink>
                        </li>
                        <li class="nav-item col-2 d-flex justify-content-end align-items-center gap-2" @click="Popup">
                            <h5>Профиль</h5>
                            <img :src="profileSrc" alt="profile" width="88px" height="55px">
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
</style>
