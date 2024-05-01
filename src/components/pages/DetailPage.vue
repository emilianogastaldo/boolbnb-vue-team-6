<script>
import BaseCard from '../BaseCard.vue';
import { store } from '../../data/store.js';
const endpoint = 'http://127.0.0.1:8000/api/contact-mail/';
import axios from 'axios';
export default {
    name: 'DetailPage',
    components: { BaseCard },
    data: () => ({
        flat: null,
        form: {
            flat_id: '',
            first_name: '',
            last_name: '',
            email_sender: '',
            text: '',
        },
        store,
        isError: false
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
        },
        sendEmail() {
            this.form.flat_id = this.flat.id
            axios.post(endpoint, this.form)
                .then(res => {
                    console.log(res)
                    this.isError = false
                })
                .catch(err => {
                    console.error(err)
                    this.isError = true
                })
                .then(() => {
                    // this.isError = false
                });
        },
        closeError() {
            this.isError = false;
        }
    },
    created() {
        this.getFlat();
    }

}
</script>

<template>
    <BaseCard v-if="!store.isLoading && flat" :flat="flat" :isDetail="true" />
    <h2>Contattaci per maggiori info</h2>
    <form @submit.prevent="sendEmail" class="w-50 mb-5">
        <div v-if="isError">
            <h2>ERRORE<button @click="closeError">X</button></h2>
        </div>
        <div class="row g-2">
            <!-- Nome -->
            <div class="col-6">
                <label for="first_name" class="form-label">Nome <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="first_name" placeholder="es: Mario"
                    v-model="form.first_name">
            </div>
            <!-- Cognome -->
            <div class="col-6">
                <label for="last_name" class="form-label">Cognome <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="last_name" placeholder="es: Rossi" v-model="form.last_name">
            </div>
            <!-- Email -->
            <div class="col">
                <label for="email_sender" class="form-label">Indirizzo email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="email_sender" placeholder="es: mario.rossi@gmail.com"
                    v-model="form.email_sender">
            </div>
            <!-- Messaggio -->
            <div class="col-12">
                <label for="text" class="form-label">Scrivi il tuo messaggio <span class="text-danger">*</span></label>
                <textarea class="form-control" id="text" rows="10" v-model="form.text"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Invia</button>
    </form>

</template>