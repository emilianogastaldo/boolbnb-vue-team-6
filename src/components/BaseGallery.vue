<script>
import BaseCard from './BaseCard.vue'
export default {
    name: 'BaseGallery',
    components: {
        BaseCard
    },
    props: {
        flats: Array,
    },

    methods: {
    }

}
</script>

<template>
    <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
        <BaseCard v-for="flat in flats" :key="flat.id" :flat="flat" class="col" />
    </div>
</template>

<style lang="scss" scoped></style>