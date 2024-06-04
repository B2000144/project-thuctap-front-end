import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "hello",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test.vue"),
  },
  {
    path: "/admin/register",
    name: "regsiter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/regsiter.vue"),
  },
  {
    path: "/admin/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/login.vue"),
  },

  {
    path: "/admin/adminHome",
    name: "adminHome",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/adminHome.vue"),
  },
  {
    path: "/admin/test/register",
    name: "test-reg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test/regsiter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
