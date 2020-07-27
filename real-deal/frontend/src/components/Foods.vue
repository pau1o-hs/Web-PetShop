<template>
  <div class="foods">
    <section id="foods">
      <div class="item-unity" v-for="item in products" :key="item._id">
        <img :src="item.photo" />
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
  name: "Foods",
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
        tag: "foods",
      })
      .then((response) => {
        this.products = response.data;
      });
  },
};
</script>

<style>
#foods {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 65%;
  height: auto;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "food1 food2 food3 food4" "food5 food6 food7 food8";
  align-self: center;
  margin-bottom: 5vh;
}
#foods div {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5vh;
  color: black;
}

.food1 {
  grid-area: food1;
  width: 100%;
}

.food2 {
  grid-area: food2;
  width: 100%;
}

.food3 {
  grid-area: food3;
  width: 100%;
}

.food4 {
  grid-area: food4;
  width: 100%;
}

.food5 {
  grid-area: food5;
  width: 100%;
}

.food6 {
  grid-area: food6;
  width: 100%;
}

.food7 {
  grid-area: food7;
  width: 100%;
}

.food8 {
  grid-area: food8;
  width: 100%;
}
</style>
