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
  
      <!-- Bắt đầu Hero -->
      <div class="container-fluid py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-md-12 col-lg-7">
              <h4 class="mb-3 text-secondary">Thực phẩm hữu cơ 100%</h4>
              <h1 class="mb-5 display-3 text-primary">Thương Mại Điện Tử</h1>
              <div class="position-relative mx-auto">
                <input class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Tìm kiếm" v-model="searchQuery">
                <button type="submit" class="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style="top: 0; right: 25%;" @click="search">Tìm Ngay</button>
              </div>
            </div>
            <div class="col-md-12 col-lg-5">
              <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active rounded">
                    <img src="../assets/image/anh1.jpg" class="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide">
                    <a href="#" class="btn px-4 py-2 text-white rounded">Trái cây</a>
                  </div>
                  <div class="carousel-item rounded">
                    <img src="../assets/image/anh2.jpg" class="img-fluid w-100 h-100 rounded" alt="Second slide">
                    <a href="#" class="btn px-4 py-2 text-white rounded">Rau củ</a>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Trước</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Tiếp theo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kết thúc Hero -->
  
      <!-- Bắt đầu Cửa hàng Rau -->
      <div class="container-fluid vesitable py-5">
        <div class="container py-5">
          <h1 class="mb-0">Rau Hữu Cơ Tươi</h1>
          <div class="owl-carousel vegetable-carousel justify-content-center">
            <!-- Các mục Rau sẽ được thêm vào đây -->
          </div>
        </div>
      </div>
      <!-- Kết thúc Cửa hàng Rau -->
  
      <!-- Bắt đầu Phần Banner -->
      <div class="container-fluid banner bg-secondary my-5">
        <div class="container py-5">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <div class="py-4">
                <h1 class="display-3 text-white">Trái Cây Ngoại Nhập Tươi</h1>
                <p class="fw-normal display-3 text-dark mb-4">trong Cửa Hàng Của Chúng Tôi</p>
                <p class="mb-4 text-dark">Lorem Ipsum được tạo ra luôn luôn không chứa các từ lặp lại, hài hước chèn vào, hoặc các từ không đặc trưng, v.v.</p>
                <a href="#" class="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">MUA</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="position-relative">
                <img src="img/baner-1.png" class="img-fluid w-100 rounded" alt="">
                <div class="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style="width: 140px; height: 140px; top: 0; left: 0;">
                  <h1 style="font-size: 100px;">1</h1>
                  <div class="d-flex flex-column">
                    <span class="h2 mb-0">50$</span>
                    <span class="h4 text-muted mb-0">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kết thúc Phần Banner -->
  
      <!-- Bắt đầu Thống Kê -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="bg-light p-5 rounded">
            <div class="row g-4 justify-content-center">
              <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="counter bg-white rounded p-5">
                  <i class="fa fa-users text-secondary"></i>
                  <h4>khách hàng hài lòng</h4>
                  <h1>1963</h1>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="counter bg-white rounded p-5">
                  <i class="fa fa-users text-secondary"></i>
                  <h4>chất lượng dịch vụ</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="counter bg-white rounded p-5">
                  <i class="fa fa-users text-secondary"></i>
                  <h4>chứng chỉ chất lượng</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-3">
                <div class="counter bg-white rounded p-5">
                  <i class="fa fa-users text-secondary"></i>
                  <h4>Sản phẩm có sẵn</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kết thúc Thống Kê -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
       
      };
    },
    methods: {
      search() {
        axios.get("http://localhost:8000/v1/product/")
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
  /* Các kiểu dáng cho trang chính của bạn ở đây */
  </style>
  