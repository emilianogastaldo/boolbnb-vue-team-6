<script>
import axios from 'axios';
const baseUri = 'http://localhost:8000/api/flats/';
// Script per visualizzare gli appartamenti ricevuti dalla chiamata API
const keyApi = 'MZLTSagj2eSVFwXRWk7KqzDDNLrEA6UF';
// Coordinate di Roma <3
const lat = '41.9027835';
const lon = '12.4963655';
const radius = '20000';

export default {
    name: 'SearchForm',
    data: () => ({
        address: '',
        streetList: [],
        message: '',
        isDropdownOpen: false
    }),
    methods: {
        getApiFlats() {
            if (this.address == '') return;
            axios.get(`https://api.tomtom.com/search/2/search/${this.address}.json?key=${keyApi}&countrySet=IT&limit=5&lat=${lat}&lon=${lon}&radius=${radius}`)
                .then(res => {
                    console.log(res.data.results);
                    this.streetList = res.data.results;
                    this.message = !this.streetList.length ? 'Non ci sono appartamenti' : '';
                    console.log(this.message);
                    this.isDropdownOpen = true;
                })
                .catch(err => {
                    console.error('Si è verificato un errore durante il recupero dei dati dall\'API:', err);
                });
        },
        setAddress(completeAddress) {
            this.address = completeAddress;
            this.streetList = [];
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        handleDocumentClick(event) {
            if (!event.target.closest('.autocomplete')) {
                this.closeDropdown();
            }
        },
        clearSearch() {
            this.address = '';
        },
        onFormSubmit() {
            this.$emit('sent-form', this.address);
            this.clearSearch();
            this.$router.push({ name: 'filter' });
        }
    },
    emits: ['sent-form'],
    mounted() {
        document.addEventListener('click', this.handleDocumentClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
    }
}
</script>

<template>
    <nav class="navbar position-relative">
        <div>
            <form class="d-flex align-items-center" role="search" @submit.prevent="onFormSubmit">
                <input class="form-control search-input" type="search" placeholder="Cerca un appartamento.."
                    aria-label="Search" v-model.trim="address" @keyup="getApiFlats">
                <button class="btn text-white">
                    <font-awesome-icon :icon="'fas fa-magnifying-glass'" />
                </button>
            </form>
        </div>
        <ul v-if="isDropdownOpen" class="list-group position-absolute autocomplete">
            <li @click="setAddress(street.address.freeformAddress)" class="list-group-item"
                v-for="(street, i) in streetList" :key="i" :class="{ pointer: street.address }">
                {{ street.address.freeformAddress }}
            </li>
            <li class="list-group-item" v-if="message">{{ message }}</li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.autocomplete {
    top: 90%;
    left: 3%;
    z-index: 1;
}

/* tolgo lo stile al bottone*/
li button {
    border: none;
    padding: 0;
    background-color: none;
}

.pointer {
    cursor: pointer;
}

.search-input {
    height: 30px;
}
</style>