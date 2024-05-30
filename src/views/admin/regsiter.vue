<template>
  <section class="h-100 h-custom" style="background-color: #8fc4b7">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              class="w-100"
              style="
                border-top-left-radius: 0.3rem;
                border-top-right-radius: 0.3rem;
              "
              alt="Sample photo"
            />
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Registration Info
              </h3>

              <form class="px-md-2" @submit.prevent="register">
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="first_name"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q">Tên</label>
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="middle_name"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q">Tên Đệm</label>
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="last_name"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q">Họ</label>
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="user_name"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q"
                    >Tên Đăng nhập</label
                  >
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="email_user"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q"
                    >Địa chỉ Email</label
                  >
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="phone_number"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q">SDT</label>
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="password"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q"
                    >Mật khẩu</label
                  >
                </div>

                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-success btn-lg mb-1"
                >
                  Submit
                </button>
              </form>

              <div v-if="message" class="mt-3 alert" :class="alertClass">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      first_name: "",
      middle_name: "",
      last_name: "",
      user_name: "",
      email_user: "",
      password: "",

      phone_number: "",
      message: "", // Thêm message để hiển thị thông báo
      alertClass: "", // Thêm alertClass để hiển thị loại thông báo
    };
  },
  methods: {
    register() {
      let result = axios
        .post("http://localhost:8000/v1/auth/register", {
          first_name: this.first_name,
          middle_name: this.middle_name,
          last_name: this.last_name,
          user_name: this.user_name,
          email_user: this.email_user,
          phone_number: this.phone_number,
          password: this.password,
        })
        .then((response) => {
          this.message = "Đăng ký thành công!";
          this.alertClass = "alert-success";
          console.log("Success:", response);
        });
      if (result.success == true) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style>
.alert {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
</style>
