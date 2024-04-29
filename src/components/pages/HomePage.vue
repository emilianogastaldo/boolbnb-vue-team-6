<script>
import { store } from '../../data/store.js';
import BaseGallery from '../BaseGallery.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    components: { BaseGallery, SearchForm },
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
                const res = await axios.get(endpoint);
                // destrutturo i dati dalla risposta
                const { data } = res;
                // stampo i risultati in console
                // console.log(data);
                // riassegno la risposta all'array degli appartamenti
                this.flats = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        }
    },
    created() {
        // invoco il metodo per la chiamata all'avvio della pagina
        this.fetchFlats();
    }
}
</script>

<template>
    <SearchForm @sent-form="fetchFlats" />
    <BaseGallery :flats="flats" />
</template>