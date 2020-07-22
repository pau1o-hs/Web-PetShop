
<template>
    <div class="snaks">
        <section id="foods">
            <div class="item-unity food1">
                <img src="../mockup/images/petiscos/snack1.jpg" alt="Ração de gato">
                <h2 id="nome-item">Item name</h2>
                <p id="descricao-item">Description</p>
                <p id="preco">R$0,00</p>
                <button id="adicionar-carrinho">Adicionar ao carrinho</button>

            </div>

            <div class="item-unity food2">
                <img src="../mockup/images/petiscos/snack2.jpg" alt="Ração de gato">
                <h2 id="nome-item">Item name</h2>
                <p id="descricao-item">Description</p>
                <p id="preco">R$0,00</p>
                <button id="adicionar-carrinho">Adicionar ao carrinho</button>
            </div>

            <div class="item-unity food3">
                <img src="../mockup/images/petiscos/snack3.jpg" alt="Ração de gato">
                <h2 id="nome-item">Item name</h2>
                <p id="descricao-item">Description</p>
                <p id="preco">R$0,00</p>
                <button id="adicionar-carrinho">Adicionar ao carrinho</button>
            </div>

            <div class="item-unity food4">
                <img src="../mockup/images/petiscos/snack4.jpg" alt="Ração de gato">
                <h2 id="nome-item">Item name</h2>
                <p id="descricao-item">Description</p>
                <p id="preco">R$0,00</p>
                <button id="adicionar-carrinho">Adicionar ao carrinho</button>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Snacks',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>