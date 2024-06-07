<template>
  <div class="container">
    <div class="Menu">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tất Cả Danh Mục</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tài Khoản & Đơn Hàng</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Giỏ Hàng</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Hỏi Đáp</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Danh Mục
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Hành Động</a></li>
                  <li><a class="dropdown-item" href="#">Hành Động Khác</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Điều Gì Khác</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Tìm Kiếm" aria-label="Tìm Kiếm">
              <button class="btn btn-outline-success" type="submit">Tìm Kiếm</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    <!-- Banner chính -->
    <header class="bg-danger p-3">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Thương Mại Điện Tử</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Mua hàng nhanh chóng, tiện lợi</p>
                </div>
            </div>
        </header>
    <!-- Kết thúc -->

    <!-- Carousel Section -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/image/banner1.png" class="d-block w-100" alt="Slide 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>Description for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/image/banner2.png" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>Description for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/image/banner3.png" class="d-block w-100" alt="Slide 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>Description for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- End Carousel Section -->
  </div>

  <!-- Menu sản phẩm tìm kiếm -->
  <div class="''">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Sản phẩm </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Điện thoại</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Thời trang</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Các loại bánh</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Phụ kiện</a>
  </li>
</ul>
    </div>
    <!-- Kết thúc tìm kiếm -->
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Add your styles here if necessary */
</style>