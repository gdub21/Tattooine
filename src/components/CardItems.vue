<template>
    <div v-for="item in items" class="container-master">
        <div class="item-name-container" >
            <h3 class = "item-name-header"> {{ item.itemName }}</h3>
        </div>
        <div class="item-description-container">
            <span class="item-description-box">
                {{ item.itemDescription }}
            </span>
        </div>
        <div class="item-price-container">
            <span class ="item-price-box">
                {{ item.itemPrice }}
            </span>
            <button class="book-button p-button" @click ="onBook">Book</button>
        </div>
    </div>

</template>
<script setup>
    import { defineProps } from 'vue';

    const emit = defineEmits(['bookArtist']);
    const onBook = () => {
        const artistPageLink = {
            link: item.pageLink.value,
        }
        
        emit('bookArtist', artistPageLink);
    }
    const props = defineProps({
        items: {
            type: Array,
            required: true
        },
        
    });
   
</script>
<style>

    .item-name-container {
        display: flex;
    }
    .item-name-header {
        color: black;
    }
    .item-price-box {
        padding-right: 5px;
    }
    .item-price-container {
        color: black; 
        display: flex;
        justify-content: end;
        align-content: end;
    }
    .item-description-box {
        color: black;
    }
    .book-button {
        background-color: transparent;
        color: #64748B;
        border: 1px solid;
        border-radius: 5px;
        padding: 5px;
    }
    .container-master {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border-top: 1px solid #ebebeb;
        padding: 1rem;
    }
    .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: var(--vt-c-black);
}
</style>