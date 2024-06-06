<template>
  <div class="home">
    <!-- Bắt đầu Modal Tìm kiếm -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tìm kiếm theo từ khóa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <div class="input-group w-75 mx-auto d-flex">
              <input type="search" class="form-control p-3" placeholder="từ khóa" aria-describedby="search-icon-1" v-model="searchQuery">
              <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search" @click="search"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Kết thúc Modal Tìm kiếm -->

    <Header />
    <div class="container">
     
   <div class= "row">
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh4.jpg'
      </div>
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh5.jpg'
      </div>
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh6.jpg'
      </div>
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh7.jpg'
      </div>
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh8.jpg'
      </div>
      <div class ="col-6 col-sm-3 col-md-2 image">
        <img src='../assets/image/anh9.jpg'
      </div>
   </div>
        </div>
      </div>
<!--  -->
    <div class="''">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
    </div>
    <Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import productService from '@/service/product.service';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      productService.getAll()
        .then(response => {
          console.log(response.data);
          // Xử lý dữ liệu phản hồi
        })
        .catch(error => {
          console.error(error);
          // Xử lý lỗi
        });
    }
  }
};
</script>

<style scoped>
.image img {
  width: 100%;
  height: auto;
}

/* Các kiểu dáng khác cho trang chính của bạn ở đây */
</style>
