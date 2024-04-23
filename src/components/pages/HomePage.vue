<script>
import { store } from '../../data/store.js';
import BaseGallery from '../BaseGallery.vue';
import axios from 'axios';
const baseUri = 'http://localhost:8000/api/flats/';
export default {
    name: 'HomePage',
    components: { BaseGallery },
    data: () => ({
        flats: [],
        store
    }),
    methods: {
        async fetchFlats(endpoint) {
            // attivo il loader
            store.isLoading = true;
            // controllo quale sia l'endpoint 
            if (!endpoint) endpoint = baseUri;
            // tento la chiamata
            try {
                // raccolgo i dati dal DB
                const res = await axios.get(endpoint);
                // destrutturo i dati dall'oggetto risposta
                const { data } = res;
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio array di appartamenti vuoto
                this.flats = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
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
    <BaseGallery :flats="flats" />
</template>