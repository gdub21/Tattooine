<template>
    <Card class="artist-card" style="width: 300px; overflow: hidden; height: 400px;">
        <template #header>
            <div class="image-frame">
                <img class="artist-image" alt="artist image" :src="artistImg">
            </div>
        </template>
        <template #title>{{ props.artistName }}</template>
            <template #subtitle>{{ props.artistLocation }}</template>
                <template #content>
                    <span v-for="tag in props.artistTags" class="m-1 tag-label" >
                       <Chip>
                            {{ tag }}
                       </Chip>
                    </span>
        </template>
    <template #footer>
        <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" @click="artistPageLink">View Page</Button>
           

        </div>
    </template>
    </Card>
</template>
<script setup>
        import Chip from 'primevue/chip';    
        const props = defineProps({
        artistName: String, 
        artistLocation: String, 
        artistImg: String, 
        starRating: Number,
        artistTags: Array,
        artistPageLink: String,
    })

</script>
<style>
    
    .p-chip {
        margin: 2px;
    }
    .p-card .p-card-content {
        height: 60px;
    }
    .artist-card .p-card-content {
        padding: 0px;
        margin-bottom: 2px;
    }
    .p-card .p-card-title {
        height: 29px;
        font-size: 1.3rem;

    }
    .p-card .p-card-body {
        display: grid;
        padding: 1rem;
        height: 50%
    }
    .p-card .p-card-footer {
        display: flex;
        align-content: end;
        height: 48px;
        margin: 2px;
        padding: 0rem;
       
    }
    
    .image-frame {
        display: block;
        width: 100%;
        height: 200px;
        overflow: hidden;
       
    }
    .artist-image {
        height: auto;
        max-width: 100%;
    }
</style>