<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <i class="fa-solid fa-house"></i> Trang Chủ
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/adminpage" class="nav-link"
            >Quản lý sản phẩm</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link"
            >Quản lý tài khoản</router-link
          >
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" v-if="local_user && local_user.role">
          <router-link to="/login" class="nav-link" @click="handleLogout">
            <i class="fa-solid fa-user"></i> {{ local_user.name }} (Đăng xuất)
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import productService from "../../service/product.service";
export default {
  data() {
    return {
      local_user: {
        // Define your local_user object here
        name: "User", // Example name
        role: "admin" // Example role
      }
    };
  },
  methods: {
    handleLogout() {
      // Your logout logic here
    }
  }
};
</script>

<style scoped>
.navbar-toggler {
  border: none;
}
.nav-link:hover {
  color: #007bff !important;
}
</style>
