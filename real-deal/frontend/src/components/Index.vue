<template>
    <div class="index">
        <div class="above-slide">
            <div class="title2">
                <strong>What are you looking for?</strong>
            </div>
        </div>

        <section id="menu-home">
            <a class="home-button button1" href="products.html"><p>PRODUCTS</p></a>
            <a class="home-button button2" href="services.html"><p>SERVICES</p></a>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>