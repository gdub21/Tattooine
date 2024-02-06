<template>
    <div class="left-card-container">
        <Galleria :value="artistPictures" :responsiveOptions="responsiveOptions" :numVisible="5" 
        :circular="true" containerStyle="max-width: 300px; max-height: 300px; " 
        :showThumbnails="false"  :showItemNavigators="true" :showItemNavigatorsOnHover="true" :showIndicators="true">
            <template #item="picture">
                <img :src="`/resources/`+picture.item" :alt="picture.item.alt" style="width: 300px;height: 300px; border-radius: 10px; display: block">
            </template>
        </Galleria>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
        artistPictures: {
            type: Array,
            required: true,
        },
    });
</script>
<style>
    .left-card-container {
        display: flex;
        background: #FFFFFF;
        border: var(--card--border);
        border-radius: 10px;
      
        padding: 2rem;
        margin-bottom: 1rem;
        height: 100%;
        width: 400px;
        justify-content: center;
       
    }
</style>