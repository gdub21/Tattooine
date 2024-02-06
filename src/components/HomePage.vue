<template>

    <div class="grid">
        <div class="col-12">
            <h1 class="featured-heading">Featured Artists</h1>
            <FeaturedSection></FeaturedSection>
        </div>
        <div class="col-12 sec-level">
            <CardTemplate></CardTemplate>
        </div>
    </div>
</template>
<script setup>
    import NavBar from "./NavBar.vue"
    import FeaturedSection from "./FeaturedSection.vue";
    import CardItems from './CardItems.vue';
    import CardTemplate from "./CardTemplate.vue";
    
</script>
<style>
    .grid {
        padding: 30px;

    }
    .sec-level {
        display: block;
    }
    .featured-heading {
        padding: 20px;
        margin-left: 40px;
        color: black;
    }
</style>