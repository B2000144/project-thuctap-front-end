<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 image" v-for="i in 9" :key="i">
          <img :src="`image/animal${i % 6 + 1}.jpg`" alt="Hình ảnh ">
        </div>
      </div>
      
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.image img {
  width: 100%;
  height: auto;
}
</style>
