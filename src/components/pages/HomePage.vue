<script>
import axios from 'axios';
import { store } from '../../data/store'
import BaseCarousel from '../BaseCarousel.vue'
export default {
    name: 'HomePage',
    components: { BaseCarousel },
    data: () => ({
        flats: [],
        store
    }),
    methods: {
        async fetchFlats(address) {
            // Creo l'endpoint in base a se mi arriva un address o meno
            const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}`;
            // attivo il loader
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri);
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                store.services = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
    },
    created() {
        this.fetchFlats(store.address);
    }
}

</script>

<template>
    <div class="container">
        <BaseCarousel :flats="flats" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: calc(100% - 80px);
    overflow: auto;
}
</style>