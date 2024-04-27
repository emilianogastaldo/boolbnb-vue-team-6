<script>
import { RouterLink } from 'vue-router';
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
    <RouterLink to="detail"
        class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 text-decoration-none">
        <BaseCard v-for="flat in flats" :key="flat.id" :flat="flat" class="col" />
    </RouterLink>
</template>

<style lang="scss" scoped></style>