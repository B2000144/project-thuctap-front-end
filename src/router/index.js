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
    path: "/AdminNavMenu",
    name: "AdminNavMenu",
    component: () => import("../components/admin/AdminNavMenu.vue"),
  },

  // Login
  {
    path: "/login",
    name: "login",
    component: () => import("../components/admin/Login.vue"),
  },
  // Register
  {
    path: "/register",
    name: "register",
    component: () => import("../components/admin/Register.vue"),
  },
  // Quản lý sản phẩm
  {
    path: "/product",
    name: "product.list",
    component: () => import("../views/products/ProductList.vue"),
  },
  {
    path: "/product/create",
    name: "product.create",
    component: () => import("../views/products/ProductForm.vue"),
  },
  {
    path: "/product/edit/:id",
    name: "product.edit",
    component: () => import("../views/products/ProductForm.vue"),
    props: true, // Cho phép truy cập vào thông tin id qua props
  },

  //Quản lý tài khoản
  {
    path: "/user",
    name: "user.list",
    component: () => import("../views/users/UserList.vue"),
  },

  {
    path: "/adminpage",
    name: "admin",
    component: () => import("../views/AdminManager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
