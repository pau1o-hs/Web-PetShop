<template>
  <div class="walkway">
    <section id="foods">
      <div class="item-unity" v-for="item in products" :key="item.username">
        <img :src="item.photo" alt="Ração de gato" />
        <h2 id="nome-item">{{ item.name }}</h2>
        <p id="descricao-item">{{ item.description }}</p>
        <p id="preco">{{ item.price }}</p>
        <button id="adicionar-carrinho" v-on:click="addToCart(item)">
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cart from "../cart";

export default {
  name: "Walkway",
  data() {
    return {
      products: [],
      error: "",
    };
  },
  methods: {
    addToCart: function(item) {
      // Se já tem esse produto lá, apenas aumente sua quantidade
      if (cart.products.find((prod) => prod.slug == item.slug)) {
        const index = cart.products.findIndex((prod) => prod.slug == item.slug);
        cart.products[index].quantity++;
        return;
      }
      // Caso contrario, adicione ele no carrinho
      cart.products.push({ ...item, quantity: 1 });
    },
  },
  mounted() {
    axios
      .post("http://localhost:8080/api/products/tags/", {
        tag: "walkway",
      })
      .then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
  },
};
</script>
