<template>
    <Carousel  :value="artists" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="artist">
            <ArtistCard  class="m-auto" :artistName="artist.data.artistname" :artistTags="artist.data.artistTags" :artistLocation="artist.data.artistlocation" :artistImg="`/resources/`+ artist.data.artistimage"></ArtistCard>
        </template>
    </Carousel>
</template>
<script setup>
    import { ref } from "vue";
    import ArtistCard from "./ArtistCard.vue";
    const artists = ref([
            {
                artistname: "Tommy",
                artistlocation: "Farmersville, CA",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic1.jpg',
                artistrating: 5,
               
                 
            },
            {
                artistname: "tony",
                artistlocation: "Fresno, CA",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic2.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay, CA",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "tony",
                artistlocation: "Fresno",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic2.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "tony",
                artistlocation: "Fresno",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic2.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistTags: [
                    "Realism","Black & Grey", "Religion"
                ],
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "tony",
                artistlocation: "Fresno",
                artistimage: 'pic2.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
            {
                artistname: "tony",
                artistlocation: "Fresno",
                artistimage: 'pic2.jpg',
                artistrating: 5,
            },
            {
                artistname: "Kristiano",
                artistlocation: "Lindsay",
                artistimage: 'pic3.jpg',
                artistrating: 5,
            },
        ])
        
        function convertTags(arr) {
            var newTags = ref()
        }
</script>
<style>
   .p-carousel-container {
    height: 450px;
   }
   .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: var(--vt-c-black);
}
</style>