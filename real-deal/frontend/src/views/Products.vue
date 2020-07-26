<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/bird2.jpg" />
        <h1>PRODUCTS</h1>
      </div>
    </div>

    <div class="title2">
      <strong>Select a category</strong>
    </div>
    <section id="menu-products">
      <a class="btn-prod prod1" href="#foodsection">
        <p>Foods</p>
      </a>
      <a class="btn-prod prod2" href="#toysection">
        <p>Toys</p>
      </a>
      <a class="btn-prod prod3" href="#snacksection">
        <p>Snacks</p>
      </a>
      <a class="btn-prod prod4" href="#walkwaysection">
        <p>Walkway</p>
      </a>
      <a class="btn-prod prod5" href="#clothsection">
        <p>Clothing</p>
      </a>
      <a class="btn-prod prod6" href="#comfortsection">
        <p>Comfort</p>
      </a>
    </section>

    <!-- FOODS -->
    <div id="foodsection" class="customsection" style="background-color:#8E44AD;">
      <p>Foods</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Foods></Foods>

    <!-- TOYS -->
    <div id="toysection" class="customsection" style="background-color:#2980B9;">
      <p>Toys</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Toys></Toys>

    <!-- SNACK -->
    <div id="snacksection" class="customsection" style="background-color:#E74C3C;">
      <p>Snacks</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Snacks></Snacks>

    <!-- WALKWAY -->
    <div id="walkwaysection" class="customsection" style="background-color:#27AE60;">
      <p>Walkway</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Walkway></Walkway>

    <!-- CLOTH -->
    <div id="clothsection" class="customsection" style="background-color:#F39C12;">
      <p>Clothing</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Cloth></Cloth>

    <!-- COMFORT -->
    <div id="comfortsection" class="customsection" style="background-color:#34495E;">
      <p>Comfort</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Comfort></Comfort>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Foods from "@/components/Foods.vue";
import Toys from "@/components/Toys.vue";
import Snacks from "@/components/Snacks.vue";
import Walkway from "@/components/Walkway.vue";
import Cloth from "@/components/Cloth.vue";
import Comfort from "@/components/Comfort.vue";

export default {
  name: "Products",
  components: {
    Header,
    Footer,
    Foods,
    Toys,
    Snacks,
    Walkway,
    Cloth,
    Comfort
  },
  data() {
    return {
      info: null
    };
  }
};
</script>

<style>
#menu-products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 65%;
  height: 70vh;
  margin: 0 auto;
  background-color: none;
  grid-gap: 2.5vh;
  grid-template-areas: "a b f" "a c d" "e c d";
  align-self: center;
  margin-bottom: 5vh;
}
#menu-products a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;
  text-decoration: none;
}

.btn-prod {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border: none;
  background-position: center center;
  background-size: cover;
  transition: all 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
}
.btn-prod:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  transition: inherit;
}
.btn-prod:hover:before {
  transform: scale(1.1);
}
.btn-prod p {
  position: relative;
  text-align: center;
  top: 42%;
}

.prod1 {
  background-image: url(../../public/images/categorias/alimentacao.jpg);
  grid-area: a;
}
.prod1:hover:before {
  background-image: url(../../public/images/categorias/alimentacao.jpg);
}

.prod2 {
  background-image: url(../../public/images/categorias/products.jpg);
  grid-area: b;
}
.prod2:hover:before {
  background-image: url(../../public/images/categorias/products.jpg);
}

.prod3 {
  background-image: url(../../public/images/categorias/petiscos.jpg);
  grid-area: c;
}
.prod3:hover:before {
  background-image: url(../../public/images/categorias/petiscos.jpg);
}

.prod4 {
  background-image: url(../../public/images/categorias/passeio.jpg);
  grid-area: d;
}
.prod4:hover:before {
  background-image: url(../../public/images/categorias/passeio.jpg);
}

.prod5 {
  background-image: url(../../public/images/categorias/clothes.jpg);
  grid-area: e;
}
.prod5:hover:before {
  background-image: url(../../public/images/categorias/clothes.jpg);
}

.prod6 {
  background-image: url(../../public/images/categorias/ambiente.jpg);
  grid-area: f;
}
.prod6:hover:before {
  background-image: url(../../public/images/categorias/ambiente.jpg);
}

.item-unity {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "imagem imagem titulo titulo titulo" "imagem imagem descricao descricao descricao" "imagem imagem descricao descricao descricao" "imagem imagem preco preco preco" "buttonadd buttonadd buttonadd buttonadd buttonadd";
  grid-column-gap: 0vh;
  margin: 0 auto;
  padding: 0;
  border: none;
  background-color: white;
  background-position: center;
  background-size: 100%;
  justify-items: center;
  transition-duration: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
}
.item-unity img {
  grid-area: imagem;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.item-unity #nome-item {
  margin-top: 2vh;
  width: 90%;
  height: 100%;
  grid-area: titulo;
  justify-self: start;
  text-align: left;
}
.item-unity #descricao-item {
  width: 90%;
  height: 100%;
  justify-self: start;
  grid-area: descricao;
  text-align: left;
}
.item-unity #preco {
  font-size: 2vh;
  font-weight: bold;
  color: mediumseagreen;
  justify-self: start;
  grid-area: preco;
}
.item-unity #adicionar-carrinho {
  grid-area: buttonadd;
  width: 100%;
  height: 5vh;
  align-self: end;
  background-color: gainsboro;
  outline: none;
  border: 0;
  font-size: 1.5vh;
  font-weight: bold;
  transition: all 0.3s;
}
.item-unity #adicionar-carrinho:hover {
  background-color: cadetblue;
}
.item-unity div {
  grid-area: addremove;
  width: 100%;
}

.btn-handleItemAmount {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.btn-handleItemAmount input {
  text-align: center;
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-weight: bold;
  transition: all 0.05s;
}
.btn-handleItemAmount input:focus,
.btn-handleItemAmount input:hover {
  background-color: khaki;
  transform: scale(1.1);
}
.btn-handleItemAmount button {
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  transition: all 0.05s;
}
.btn-handleItemAmount #less {
  background-color: tomato;
}
.btn-handleItemAmount #less:hover {
  background-color: tomato;
  transform: scale(1.1);
}
.btn-handleItemAmount #plus {
  background-color: mediumseagreen;
}
.btn-handleItemAmount #plus:hover {
  background-color: mediumseagreen;
  transform: scale(1.1);
}
</style>
