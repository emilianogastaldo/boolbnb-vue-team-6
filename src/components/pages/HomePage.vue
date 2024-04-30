<script>
import { store } from '../../data/store.js';
import AppFilter from '../AppFilter.vue'
import BaseGallery from '../BaseGallery.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    components: { BaseGallery, SearchForm, AppFilter },
    data: () => ({
        flats: [],
        services: [],
        rooms: '',
        bathrooms: '',
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
                const { flats, services } = data;
                // stampo i risultati in console
                console.log(flats, services);
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                this.services = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
        setFilters(form) {
            this.rooms = form.rooms;
            this.bathrooms = form.bathrooms;
        },
    },
    computed: {
        filteredFlats() {
            let newFlats = this.flats.filter(flat => {
                if (this.rooms == 0) {
                    return this.flats;
                }
                else {
                    return flat.room >= this.rooms;
                }
            })

            newFlats = newFlats.filter(flat => {
                if (this.bathrooms == 0) {
                    return newFlats;
                }
                else {
                    return flat.bathroom >= this.bathrooms;
                }
            })
            return newFlats;
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
    <AppFilter :flats="flats" :flatServices="services" @send-form="setFilters" />
    <BaseGallery :flats="filteredFlats" />
</template>