import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import DrinksView from '../views/DrinksView.vue'
import FavosView from '../views/FavosView.vue'

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})  


export default router;
