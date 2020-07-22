<template>
    <div class="products">
        <div class="container">
            <Header></Header>
            <input type="radio" id="i1" name="images" checked />
            <div class="slide_img" id="one">
                <img src="../mockup/images/bird2.jpg" />
                <h1>PRODUCTS</h1>
            </div>
        </div>

        <div class="title2"><strong>Select a category</strong></div>
        <section id="menu-products">
            <a class="btn-prod prod1" href="#foodsection"><p>Foods</p></a>
            <a class="btn-prod prod2" href="#toysection"><p>Toys</p></a>
            <a class="btn-prod prod3" href="#snacksection"><p>Snacks</p></a>
            <a class="btn-prod prod4" href="#walkwaysection"><p>Walkway</p></a>
            <a class="btn-prod prod5" href="#clothsection"><p>Clothing</p></a>
            <a class="btn-prod prod6" href="#comfortsection"><p>Comfort</p></a>
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
    import Home from './Home.vue';
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Escorregador from './escorregador.vue';
    import Foods from './Foods.vue';
    import Toys from './Toys.vue';
    import Snacks from './Snacks.vue';
    import Walkway from './Walkway.vue';
    import Cloth from './Cloth.vue';
    import Comfort from './Comfort.vue';

    export default {
        name: 'Products',
        components: {
            Home, Header, Footer, Escorregador, Foods, Toys, Snacks, Walkway, Cloth, Comfort
        },
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>