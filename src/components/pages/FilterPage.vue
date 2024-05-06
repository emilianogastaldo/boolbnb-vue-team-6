<script>
import { store } from '../../data/store.js';
import AppSidebar from '../AppSidebar.vue'
import BaseGallery from '../BaseGallery.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'FilterPage',
    components: { BaseGallery, SearchForm, AppSidebar },
    data: () => ({

        filterRooms: '',
        filterBathrooms: '',
        filterServices: [],
        range: '',
        store
    }),
    methods: {
        debug() {
            console.log(store.services, store.flats);
        },
        setFilters(form) {

            this.filterRooms = form.rooms;
            this.filterBathrooms = form.bathrooms;
            this.filterServices = form.services;
        },
    },
    computed: {
        filteredFlats() {
            let newFlats = store.flats.filter(flat => {
                if (this.filterRooms == 0) {
                    return store.flats;
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
        this.debug();
    }
}
</script>

<template>

    <div>
        <AppSidebar :flats="store.flats" :flatServices="store.services" @send-form="setFilters" />
        <BaseGallery :flats="filteredFlats" />

    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    flex-grow: 1;
    overflow: auto;
}
</style>