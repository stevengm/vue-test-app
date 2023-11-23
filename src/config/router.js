import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/home.vue";
import Detail from "../pages/detail/detail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;