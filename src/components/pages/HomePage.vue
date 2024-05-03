<script>
import { store } from '../../data/store.js';
import AppSidebar from '../AppSidebar.vue'
import BaseGallery from '../BaseGallery.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    components: { BaseGallery, SearchForm, AppSidebar },
    data: () => ({
        flats: [],
        services: [],
        filterRooms: '',
        filterBathrooms: '',
        filterServices: [],
        store
    }),
    methods: {
        async fetchFlats(address) {
            console.log(address)
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
                // console.log(flats, services);
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
            this.filterRooms = form.rooms;
            this.filterBathrooms = form.bathrooms;
            this.filterServices = form.services;
        },
    },
    computed: {
        filteredFlats() {
            let newFlats = this.flats.filter(flat => {
                if (this.filterRooms == 0) {
                    return this.flats;
                }
                else {
                    return flat.room >= this.filterRooms;
                }
            })

            newFlats = newFlats.filter(flat => {
                if (this.filterBathrooms == 0) {
                    return newFlats;
                }
                else {
                    return flat.bathroom >= this.filterBathrooms;
                }
            })

            // newFlats = newFlats.filter(flat => {
            //     if (this.filterServices.length === 0) {
            //         return newFlats;
            //     }
            //     else {
            //         let flag = true;
            //         flat.services.forEach(service => {
            //             if (!this.filterServices.includes(service.id)) {
            //                 flag = false;
            //                 return flag;
            //             }
            //         })
            //         return flag;

            //     }
            // })
            newFlats = newFlats.filter(flat => {
                if (this.filterServices.length === 0) {
                    return true; // Includi tutti gli appartamenti se nessun servizio è selezionato
                } else {
                    // Controlla se uno dei servizi nell'flat corrisponde ai servizi selezionati
                    // return flat.services.some(service => this.filterServices.includes(service.id));
                    // Controlla se l'appartamento ha esattamente tutti i servizi selezionati
                    return this.filterServices.every(filterService => flat.services.some(service => service.id === filterService));
                }
            });
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
    <SearchForm @sent-form="fetchFlats" class="d-none" />
    <div class="d-flex">
        <AppSidebar :flats="flats" :flatServices="services" @send-form="setFilters" />
        <BaseGallery :flats="filteredFlats" />

    </div>
</template>

<style lang="scss" scoped></style>