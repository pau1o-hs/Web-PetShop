<template>
  <div id="cart">
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/products-header.jpg" />
        <h1>CART</h1>
      </div>
    </div>

    <div class="above-slide">
      <div class="title2">
        <strong>See your selected items</strong>
      </div>
    </div>

    <section class="main-block">
      <div class="cart-model" v-for="p in products" :key="p._id">
        <!--  <img src="../../public/images/racoes/racao-gato.jpg" alt="Ração de gato" /> -->
        <h2>{{ p.name }}</h2>
        <p>{{ p.description }}</p>
        <p>{{ p.price }}</p>
        <p>quantity</p>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "cart",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [],
      error: ""
    };
  },
  mounted() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWQwNmJjZmM3NTA1MDNmNTUyMzRkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU5NTczNzc5MywiZXhwIjoxNTk1ODI0MTkzfQ.Ofmcp_L_6a9V56VeYbIEyNRTmYtqz0ClClBu9lI-Stc";

    axios
      .get("http://localhost:8080/api/admin/products", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });
  }
};
</script>

<style>
.main-block {
  display: grid;
  width: 90%;
  margin: 5vh auto;
  align-items: center;
  justify-content: center;
}
.cart-model {
  flex-direction: column;
  background-color: #eeeeee;
  /* border-style: solid; */

  /* border-width: 1px 0px; */
  border-bottom: 0.1vh solid #333;
  border-color: #333;
  /* box-shadow: 0 0 10px black; */

  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 70vw;
}
.cart-model p {
  padding-top: 1.5vh;
}

.cart-model h2 {
  padding-top: 1vh;
}
</style>
