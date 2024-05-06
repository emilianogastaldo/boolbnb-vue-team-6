<script>
import { services } from '@tomtom-international/web-sdk-services';
import { store } from '../../data/store.js';
import AppSidebar from '../AppSidebar.vue'
import BaseGallery from '../BaseGallery.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'FilterPage',
    components: { BaseGallery, SearchForm, AppSidebar },
    data: () => ({
        flats: [],
        flatServices: [],
        address: '',
        room: '',
        bathroom: '',
        services: [],
        range: '',
        store,
    }),
    methods: {
        async fetchFlats(address) {
            const stringServices = JSON.stringify(this.services);
            // Creo l'endpoint in base a se mi arriva un address o meno
            // const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}&room=${this.room}&bed=${this.bed}&services=${stringServices}`;
            // attivo il loader                             ?room=1&bed=1&services=1,2,4,8&distance=1&address=via prova
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri, {
                    params: {
                        address,
                        room: this.room,
                        bathroom: this.bathroom,
                        services: stringServices
                    }
                });
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                this.flatServices = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
        async fetchFlatsFilters() {
            const stringServices = JSON.stringify(this.services);
            // Creo l'endpoint in base a se mi arriva un address o meno
            // const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}&room=${this.room}&bed=${this.bed}&services=${stringServices}`;
            // attivo il loader                             ?room=1&bed=1&services=1,2,4,8&distance=1&address=via prova
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri, {
                    params: {
                        address: store.address,
                        room: this.room,
                        bathroom: this.bathroom,
                        services: stringServices
                    }
                });
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                this.flatServices = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
        emptyFilters() {
            this.address = '';
            this.room = '';
            this.bathroom = '';
            this.services = [];
            this.range = '';
        }
    },
    created() {
        this.fetchFlats(this.address);
    }
}
</script>

<template>
    <div class="container">
        <SearchForm @send="fetchFlats" class="mx-auto" />
        <div class="mt-2">
            <h5>Filtri</h5>
            <form @submit.prevent="fetchFlatsFilters">
                <div class="row">
                    <div class="col-6">
                        <label for="range">Raggio di ricerca {{ range }} km</label>
                        <input type="range" class="form-range" id="range" min="1" max="20" step="1" v-model="range">
                    </div>
                    <div class="col">
                        <label for="rooms">Numero di stanze:</label>
                        <input id="rooms" type="number" min="0" step="1" v-model="room">
                    </div>
                    <div class="col">
                        <label for="bathrooms">Numero di bagni:</label>
                        <input id="bathrooms" type="number" min="0" step="1" v-model="bathroom">
                    </div>
                </div>
                <h5 class="mt-3">Servizi</h5>
                <div class="mt-3">
                    <div class="row row-cols-6">
                        <div class="col" v-for="(flatService, i) in flatServices" :key="i">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" :for="flatService.id">{{ flatService.name }}
                                </label>
                                <input class="form-check-input" :id="flatService.id" type="checkbox"
                                    :value="flatService.id" v-model="services">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-3 mt-2">
                    <button class="btn btn-sm btn-primary">Cerca</button>
                    <span @click="emptyFilters" class="btn btn-sm btn-warning">Svuota i campi</span>
                </div>
            </form>
        </div>
    </div>

    <!-- <AppSidebar :flats="store.flats" :flatServices="store.services" @send-form="" /> -->
    <BaseGallery :flats="flats" />

</template>

<style lang="scss" scoped></style>