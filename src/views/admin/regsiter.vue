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
                    v-model="password"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q"
                    >Mật khẩu</label
                  >
                </div>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="re_password"
                    type="text"
                    id="form3Example1q"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example1q"
                    >Nhập lại mật khẩu</label
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "regsiter",
  data() {},
  methods: {
    register() {
      console.log(this.first_name);
      console.log(this.middle_name);
      console.log(this.last_name);
      console.log(this.user_name);
      console.log(this.email_user);
      console.log(this.password);
      console.log(this.re_password);
    },
  },
};
</script>

<style></style>
