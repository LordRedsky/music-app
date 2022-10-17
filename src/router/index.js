import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"
import Manage from "../views/ManageView.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/manage",
    component: Manage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500"
})

export default router
