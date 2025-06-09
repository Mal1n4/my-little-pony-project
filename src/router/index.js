import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import DrinksView from '../views/DrinksView.vue'
import FavosView from '../views/FavosView.vue'
import EggnogView from '../views/EggnogView.vue'
import SignUpView from '../views/SignUpView.vue'
import SapcakeView from '../views/SapcakeView.vue'
// import PunchView from '../views/PunchView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView,
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinksView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavosView,
    },
    {
      path: '/eggnog',
      name: 'eggnog',
      component: EggnogView,
    },
    {
      path: '/sapphire-cakes',
      name: 'sapphire-cakes',
      component: SapcakeView,
    },
    // {
    //   path: '/punch',
    //   name: 'punch',
    //   component: EggnogView,
    // },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})  


export default router;
