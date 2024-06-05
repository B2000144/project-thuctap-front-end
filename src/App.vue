<template>
  <nav>
    <router-link to="/">Trang chủ</router-link> |
    <router-link to="/admin/register">Đăng Ký</router-link> |
    <router-link to="/admin/login">Đăng Nhập</router-link> |
    <router-link to="/admin/productList">Danh sách Sản Phẩm</router-link> |
    <router-link to="/about">Liên Hệ</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>