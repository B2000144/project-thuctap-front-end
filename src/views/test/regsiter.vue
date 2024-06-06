<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div
            class="card shadow-2-strong card-registration"
            style="border-radius: 15px"
          >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form @submit.prevent="submit">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        class="form-control form-control-lg"
                        v-model="first_name"
                      />
                      <label class="form-label" for="firstName"
                        >Tên của bạn</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        class="form-control form-control-lg"
                        v-model="last_name"
                      />
                      <label class="form-label" for="lastName">Họ</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        class="form-control form-control-lg"
                        v-model="middle_name"
                      />
                      <label class="form-label" for="lastName">Tên lót</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div
                      data-mdb-input-init
                      class="form-outline datepicker w-100"
                    >
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        v-model="phone_number"
                      />
                      <label for="birthdayDate" class="form-label"
                        >số điện thoại</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div
                      data-mdb-input-init
                      class="form-outline datepicker w-100"
                    >
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        v-model="user_name"
                      />
                      <label for="birthdayDate" class="form-label"
                        >tên đăng nhập</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div
                      data-mdb-input-init
                      class="form-outline datepicker w-100"
                    >
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        v-model="password"
                      />
                      <label for="birthdayDate" class="form-label"
                        >mật khẩu</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <h6 class="mb-2 pb-1">giới tính:</h6>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="femaleGender"
                        >Nam</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="option2"
                      />
                      <label class="form-check-label" for="maleGender"
                        >Nữ</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="option3"
                      />
                      <label class="form-check-label" for="otherGender"
                        >Khác</label
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                        v-model="email_user"
                      />
                      <label class="form-label" for="emailAddress"
                        >Địa chỉ Email</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                        v-model="phone_number"
                      />
                      <label class="form-label" for="phoneNumber"
                        >Số điện thoại</label
                      >
                    </div>
                  </div>
                </div>

                <div class="mt-4 pt-2">
                  <input
                    data-mdb-ripple-init
                    class="btn btn-primary btn-lg"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import authService from "@/service/auth.service";
export default {
  name: "test-reg",
  data() {
    return {
      first_name: "",
      last_name: "",
      middle_name: "",
      phone_number: "",
      user_name: "",
      password: "",
      email_user: "",
      phone_number: "",
    };
  },
  methods: {
    submit() {
      authService
        .register({
          first_name: this.first_name,
          last_name: this.last_name,
          middle_name: this.middle_name,
          phone_number: this.phone_number,
          user_name: this.user_name,
          password: this.password,
          email_user: this.email_user,
          phone_number: this.phone_number,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #f093fb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom right,
    rgba(240, 147, 251, 1),
    rgba(245, 87, 108, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to bottom right,
    rgba(240, 147, 251, 1),
    rgba(245, 87, 108, 1)
  );
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>
