<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'BaseCarousel',
    props: {
        flats: Object,
        isDetail: Boolean
    },

    methods: {
        createPath(img) {
            const url = new URL(this.flats['image'], import.meta.url);
            return url;

        }
    }
}
</script>

<template>

</template>