<script>
import BaseCard from '../BaseCard.vue';
import { store } from '../../data/store.js';
export default {
    name: 'DetailPage',
    components: { BaseCard },
    data: () => ({
        flat: null,
        store
    }),
    methods: {
        async getFlat() {
            // attivo il loader
            store.isLoading = true;
            try {
                // raccolgo i dati relativi al dettaglio
                const res = await axios.get(store.baseUri + this.$route.params.slug);
                // destrutturo i dati dalla res
                const { data } = res;
                // stampo i data in pagina
                console.log(data);
                // riassegno i data all'oggetto vuoto
                this.flat = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
                // forzo il reindirizzamento verso la pagina 404
                this.$router.push({ name: 'not-found' });
            }
            // spengo il loader
            store.isLoading = false;
        }
    }

}
</script>

<template>
    <BaseCard />
</template>