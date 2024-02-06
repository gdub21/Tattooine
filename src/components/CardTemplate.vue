<template>
    <div v-for="artists in artistsDataCombined" class="grid card-wrapper">
        <div class="col-12 artist-card-header">
            <h1 class = "title-name"> {{ artists.artistname }}</h1>
        </div>
        <div class="col-4 left-image-panel">
           <LeftSideCard :artistPictures="artists.artistimage"></LeftSideCard>
        </div>
        <div class="col-8 right-items-panel">
            <CardItems :items="artists.artistCardItems"></CardItems>
        </div>
    </div>
</template>
<script setup>
    import CardItems from './CardItems.vue';
    import LeftSideCard from './LeftSideCard.vue';
    import { ref } from "vue";

    const artistsDataCombined = ref([
            {
                artistKey: 2132,
                artistname: "Tommy",
                artistlocation: "Farmersville, CA",
                artistTags: [
                        "Realism","Black & Grey", "Religion"
                    ],
                artistimage: [
                                "pic2.jpg",
                                "pic1.jpg"
                            ],
                artistCardItems: [
                        {
                            itemName: "Full Day Session",
                            itemDescription: "Full day session, stensil included, water and snack provided",
                            itemPrice: "$900",
                            artistPageLink: "artist1" 
                        }, 
                        {
                            itemName: "Half Day Session",
                            itemDescription: "Full day session, stensil included, water and snack provided",
                            itemPrice: "$500",
                            artistPageLink: "artist1"
                        },
                        {
                            itemName: "Consultation Session",
                            itemDescription: "Full day session, stensil included, water and snack provided",
                            itemPrice: "$40",
                            artistPageLink: "artist1"
                        },
                    ]
            },

            {
            artistKey: 2132,
            artistname: "Tommy",
            artistlocation: "Farmersville, CA",
            artistTags: [
                "Realism","Black & Grey", "Religion"
            ],
            artistimage: ['pic2.jpg'],
            artistCardItems: [
                   {
                        itemName: "Full Day Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$900",
                        artistPageLink: "artist1" 
                    }, 
                    {
                        itemName: "Half Day Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$500",
                        artistPageLink: "artist1"
                    },
                    {
                        itemName: "Consultation Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$40",
                        artistPageLink: "artist1"
                    },
                ]
            },
            {
            artistKey: 2132,
            artistname: "Tommy",
            artistlocation: "Farmersville, CA",
            artistTags: [
                "Realism","Black & Grey", "Religion"
            ],
            artistimage: ['pic2.jpg'],
            artistCardItems: [
                   {
                        itemName: "Full Day Session",
                        itemDescription: "Full wdwdwdawdawdawdwawaaaaaaaaaaaaaaaaaaaaaaday session, stensil included, water and snack provided",
                        itemPrice: "$900",
                        artistPageLink: "artist1" 
                    }, 
                    {
                        itemName: "Half Day Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$500",
                        artistPageLink: "artist1"
                    },
                    {
                        itemName: "Consultation Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$40",
                        artistPageLink: "artist1"
                    },
                    {
                        itemName: "Half Day Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$500",
                        artistPageLink: "artist1"
                    },
                    {
                        itemName: "Half Day Session",
                        itemDescription: "Full day session, stensil included, water and snack provided",
                        itemPrice: "$500",
                        artistPageLink: "artist1"
                    },
              ]
            }
        
    ])
    
</script>
<style>
.title-name {
    color: black;
}
    .right-items-panel {
        padding-left: 3rem;
    }
    .card-wrapper {
        display: flex;
        width: 100%;
        padding: 1rem;
        min-height: 500px;
        margin-bottom: 1rem;
        border-radius: 15px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    }
</style>