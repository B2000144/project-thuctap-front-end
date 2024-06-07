<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <p>{{ product.name }}</p>
        <!-- Hiển thị các thông tin khác của sản phẩm -->
      </div>
    </div>
  </div>
</template>

<script>
import productService from '@/service/product.service'

export default {
  data() {
    return {
      loading: true,
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // Gọi hàm getAll từ productService để lấy danh sách sản phẩm
        this.products = await productService.getAll();
        this.loading = false; // Kết thúc quá trình tải dữ liệu
      } catch (error) {
        console.error("Error fetching products:", error);
        // Xử lý lỗi tại đây
      }
    }
  }
};
</script>

<style>
/* CSS styles */
</style>
