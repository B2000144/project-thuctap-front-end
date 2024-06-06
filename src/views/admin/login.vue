<template>
  <form @submit.prevent="login">
    <!-- Nhập tên người dùng -->
    <div data-mdb-input-init class="form-outline mb-4">
      <input v-model="user_name" type="text" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Tên người dùng</label>
    </div>

    <!-- Nhập mật khẩu -->
    <div data-mdb-input-init class="form-outline mb-4">
      <input v-model="password" type="password" id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Mật khẩu</label>
    </div>

    <!-- Nút đăng nhập -->
    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
      Đăng nhập
    </button>
  </form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user_name: "",
      password: ""
    };
  },
  methods: {
  login() {
    console.log("Tên người dùng:", this.user_name);
    console.log("Mật khẩu:", this.password);

    fetch("http://localhost:8000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: this.user_name,
        password: this.password
      })
    })
    .then(response => {
      console.log("Trạng thái phản hồi:", response.status);
      console.log("Headers phản hồi:", response.headers);
      return response.json().then(data => {
        console.log("Dữ liệu phản hồi:", data);
        if (response.ok) {
          console.log("Đăng nhập thành công");
          // Lưu cả accessToken và refreshToken vào cookie
          this.setCookie("access_token", data.accessToken, 1); // Thay 1 bằng số ngày cookie được lưu
          this.setCookie("refresh_token", data.refreshToken, 1); // Thay 1 bằng số ngày cookie được lưu
          // Chuyển hướng đến trang adminhome
          this.$router.push("adminHome");
        } else {
          if (response.status === 401) {
            console.error("Không được phép - Sai thông tin đăng nhập");
            alert("Tên người dùng hoặc mật khẩu không chính xác. Vui lòng thử lại.");
          } else if (response.status === 500) {
            console.error("Lỗi máy chủ nội bộ - Lỗi máy chủ");
            alert("Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau.");
          } else {
            console.error("Đã xảy ra lỗi không xác định", data);
            alert(`Đã xảy ra lỗi: ${data.message || 'Không xác định'}. Vui lòng thử lại sau.`);
          }
        }
      });
    })
    .catch(error => {
      console.error("Lỗi:", error);
      alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    });
  },
  // Hàm để lưu cookie
    setCookie(cname, cvalue, exdays) {
      console.log("Đã lưu cookie:", cname, cvalue, exdays);
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  }
}
</script>


<style scoped>
/* Thêm bất kỳ phong cách CSS nào nếu cần */
</style>
