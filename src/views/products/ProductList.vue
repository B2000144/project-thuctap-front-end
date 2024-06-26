<template>
   <div class="product-list">
      <form class="pricing-header px-3 py-3 pr-3 mx-auto float-left form-inline my-2 my-lg-0">
         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            v-model="searchText" />
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i class="fas fa-search"></i>
         </button>
      </form>
      <div class="pricing-header px-3 py-3 pr-3 mx-auto float-right">
         <button type="button" class="btn btn-danger" @click="removeAllProducts">
            <i class="fas fa-trash"></i>
            Xóa tất cả
         </button>
      </div>
      <div class="pricing-header px-3 py-3 pr-3 mx-auto float-right">
         <button type="button" class="btn btn-success">
            <router-link to="/product/create" class="button-add">
               <i class="fas fa-plus"></i>
               Thêm mới
            </router-link>
         </button>
      </div>
      <div class="container">
         <table class="table table-bordered table-striped table-sm">
            <thead>
               <tr class="table-active text-center">
                  <th scope="col">Hình ảnh</th>
                  <th scope="col" class="space-name">Tên sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col" class="space-description">Mô tả</th>
                  <th scope="col" class="space-time">Ngày tạo/Cập nhật</th>
                  <th scope="col" class="space-handle">Xử lý</th>
               </tr>
            </thead>
            <div v-if="filteredProductsCount > 0"></div>
            <p class="non-product" v-else>Không có sản phẩm nào</p>
            <tbody>
               <tr :key="index" v-for="(product, index) in filteredProducts">
                  <td>
                     <img class="product-img" :src="product.imgUrl" alt="Hình ảnh sản phẩm" />
                  </td>
                  <td class="items-center">{{ product.name }}</td>
                  <td class="items-center text-center">
                     {{ product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                     đồng
                  </td>
                  <td class="items-center">{{ product.description }}</td>
                  <td class="items-center">
                     {{ time(product.createdAt) }}
                  </td>
                  <td class="items-center">
                     <router-link :to="{
                        name: 'product.edit',
                        params: { id: product._id },
                     }">
                        <button type="button" class="btn btn-primary ml-2">
                           Sửa
                        </button>
                     </router-link>
                     &nbsp;
                     <button type="button" class="btn btn-danger" @click="deleteProduct(product._id)">
                        Xóa
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>
import ProductService from "../../service/product.service";

export default {
   data() {
      return {
         products: [],
         searchText: "",
      };
   },
   computed: {
      productStrings() {
         return this.products.map((product) => {
            const { name, description } = product;
            return [name, description].join("");
         });
      },
      filteredProducts() {
         if (!this.searchText) return this.products;
         return this.products.filter((_product, index) =>
            this.productStrings[index].includes(this.searchText)
         );
      },
      filteredProductsCount() {
         return this.filteredProducts.length;
      },
   },
   methods: {
      async getAllProduct() {
         try {
            this.products = await ProductService.getAll();
         } catch (error) {
            console.log(error);
         }
      },
      async deleteProduct(productId) {
         if (confirm("Bạn muốn xóa Sản phẩm này?")) {
            try {
               await ProductService.delete(productId);
               this.$router.push({ name: "admin" });
               this.getAllProduct();
            } catch (error) {
               console.log(error);
            }
         }
      },
      async removeAllProducts() {
         if (confirm("Bạn muốn xóa tất cả Sản phẩm?")) {
            try {
               await ProductService.deleteAll();
               this.$router.push({ name: "admin" });
               this.getAllProduct();
            } catch (error) {
               console.log(error);
            }
         }
      },
      time(timestamp) {
         const date = new Date(timestamp);
         return date.toLocaleString();
      },
   },
   created() {
      this.getAllProduct();
   },
};
</script>

<style scoped>
.product-list {
   padding-bottom: 10px;
}

.product-img {
   width: 150px;
   height: auto;
}

a {
   text-decoration: none;
}

.button-add {
   color: #fff;
}

.space-description {
   width: 80px;
}

.space-time {
   width: 180px;
}

.space-handle {
   width: 150px;
}

.items-center {
   padding-top: 40px;
}

.non-product {
   margin-left: 10px;
   margin-top: 15px;
   font-size: 20px;
   font-weight: bold;
   color: blue;
}
</style>
