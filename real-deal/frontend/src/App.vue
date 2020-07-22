<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        props: {
            msg: String
        }
    };
</script>
