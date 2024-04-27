<script>
import BaseCard from '../BaseCard.vue';
import { store } from '../../data/store.js';
export default {
    name: 'DetailPage',
    components: { BaseCard },
    data: () => ({
        flat: null,
        store
    })

}
</script>

<template>
    <BaseCard />
</template>