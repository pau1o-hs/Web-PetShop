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
      <h1>PRODUCTS</h1>
      <div class="cart-model" v-for="p in products" :key="p._id">
        <h3>Product: {{ p.name }}</h3>
        <p>Description: {{ p.description }}</p>
        <p>Price: {{ p.price }}</p>
        <p>Quantity: {{ p.quantity }}</p>
      </div>
      <!-- <h1>{{ totalProducts }}</h1> -->
      <h1>SERVICES</h1>
      <div class="cart-model" v-for="s in services" :key="s._id">
        <h3>Service: {{ s.name }}</h3>
        <p>Description: {{ s.description }}</p>
        <p>Price: {{ s.price }}</p>
        <p>Date: {{ s.date }}</p>
        <p>Pet: {{ s.pet }}</p>
      </div>
      <!-- <h1>{{ totalServices }}</h1> -->
      <button class="btn" v-on:click="submitOrder">FINISH PURCHASE</button>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import cart from "../cart";
import axios from "axios";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: [],
      services: [],
      error: "",
    };
  },
  methods: {
    submitOrder: function() {
      if (cart.products.length > 0 || cart.services.length > 0) {
        axios
          .post(
            "http://localhost:8080/api/orders",
            {
              products: cart.products,
              services: cart.services,
            },
            {
              headers: { "x-access-token": this.$token },
            }
          )
          .then((response) => {
            console.log(response.data);
            alert("Your order has been emmitted successfully!!");
            // Limpa o carrinho
            cart.products = [];
            cart.services = [];
          })
          .catch((error) => {
            console.log(error.response.data);
            alert("An error occurred");
          });
      } else {
        alert("Your cart is empty");
      }
    },
  },
  // computed: {
  //   totalProducts: function() {
  //     if (!this.products) return;
  //     const total = this.products.reduce((acc, elem) => {
  //       return acc + elem.price;
  //     });
  //     console.log(total);
  //     return total;
  //   },
  //   totalServices: function() {
  //     if (!this.services) return;
  //     const total = this.services.reduce((acc, elem) => {
  //       console.log(elem);
  //       acc + elem.price;
  //     });
  //     console.log(total);
  //     return total;
  //   },
  // },
  mounted() {
    this.products = cart.products;
    this.services = cart.services;
  },
};
</script>

<style scoped>
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
  border-top: 1vh solid #333;
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

.btn {
  background: mediumseagreen;
  display: block;
  width: 150px;
  color: #fdfffc;
  margin: 10px auto;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  border: 0;
  border: 2px solid mediumseagreen;
  outline: none;
  margin-top: 10%;
  border-radius: 24px;
  cursor: pointer;
}

.btn:hover {
  background: none;
  color: mediumseagreen;
  transition-duration: 0.1s;
}
</style>
