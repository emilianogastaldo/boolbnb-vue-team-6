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
    }),
    methods: {
        getApiFlats() {
            if (this.address == '') return;
            axios.get(`https://api.tomtom.com/search/2/search/${this.address}.json?key=${keyApi}&countrySet=IT&limit=5&lat=${lat}&lon=${lon}&radius=${radius}`)
                .then(res => {
                    console.log(res.data.results);
                    this.streetList = res.data.results;
                    this.message = !this.streetList.length ? 'Non ci sono appartamenti' : '';
                    console.log(this.message)
                    // Se non trovo appartamenti stampo un messaggio di avviso

                    // Salvo il nome della via solo al click sulla tendina
                    // const addresses = document.querySelectorAll('li');
                    // for (const address of addresses) {
                    //     address.addEventListener('click', () => {
                    //         //  Se preme il messaggio di avviso, svuoto l'input
                    //         if (address.innerText === 'Non ci sono appartamenti') {
                    //             inputAddress.value = '';
                    //             flatsList.classList.add('d-none');
                    //         } else {
                    //             inputAddress.value = address.innerText;
                    //             formAddress.value = address.innerText;
                    //             flatsList.classList.add('d-none');
                    //         }
                    //     })
                    // }
                })
                .catch(err => {
                    console.error('Si è verificato un errore durante il recupero dei dati dall\'API:', err);
                })
        },
        setAddress(completeAddress) {
            this.address = completeAddress;

        }
    },
    emits: ['sent-form']
}


// // Recupero gli elementi dal form
// const flatsList = document.getElementById("flats-list");
// const inputAddress = document.getElementById("input-address");
// const formAddress = document.getElementById("form-address");

// // Evento per far apparire la tendina
// inputAddress.addEventListener('input', () => {
//     formAddress.value = null;
//     flatsList.classList.remove('d-none');
//     if (inputAddress.value != '') getApiFlats(inputAddress.value);
// });
// // Evento per far sparire la tendina se si preme al di fuori di essa
// window.addEventListener('click', () => {
//     flatsList.classList.add('d-none');
// });

// // Funzione per recuperare gli appartamenti
// 
</script>


<template>
    <form @submit.prevent="$emit('sent-form', address)">
        <div class="input-box">
            <div class="d-flex flex-column">
                <label for="address">Indirizzo</label>
                <input id="address" type="text" v-model.trim="address" placeholder="Cerca un appartamento..."
                    @keyup="getApiFlats">
                <ul class="list-group">
                    <li role="button" @click="setAddress(street.address.freeformAddress)" class="list-group-item"
                        v-for="(street, i) in streetList" :key="i">
                        {{ street.address.freeformAddress }}
                    </li>
                    <li class="list-group-item" v-if="message">{{ message }}</li>
                </ul>
            </div>

            <button>
                <font-awesome-icon :icon="'fas fa-magnifying-glass'" />
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
form {
    /*position: fixed;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);*/
    background-color: rgb(246, 206, 206);
    border-radius: 30px
}

input {
    padding: 5px;
    border: none;
    border-radius: 15px;

}

.input-box {
    position: relative;
    display: flex;
    flex-basis: 25%;
    padding: 10px 30px 10px 10px;

    div {
        padding-left: 10px;
    }
}

button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 5px;
}
</style>