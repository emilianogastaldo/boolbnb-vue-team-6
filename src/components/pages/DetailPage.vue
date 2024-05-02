<script>
import BaseCard from '../BaseCard.vue';
import EmailForm from '../EmailForm.vue';
import { store } from '../../data/store.js';
import axios from 'axios';
const defaultForm = {
    first_name: '',
    last_name: '',
    email_sender: '',
    text: '',
    flat_id: '',
};
export default {
    name: 'DetailPage',
    components: { BaseCard, EmailForm },
    data: () => ({
        flat: null,
        form: {
            first_name: '',
            last_name: '',
            email_sender: '',
            text: '',
            flat_id: '',
        },
        store,
        isError: false,
        isSent: false
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
            axios.post(store.endpointMail, this.form)
                .then(res => {
                    this.isError = false;
                    this.isSent = true;
                    this.form = { defaultForm };
                })
                .catch(err => {
                    this.isError = true;
                })
        },
        closeError() {
            this.isError = false;
        },
        closeSent() {
            this.isSent = false;
        }
    },
    created() {
        this.getFlat();
    }

}
</script>

<template>
    <BaseCard v-if="!store.isLoading && flat" :flat="flat" :isDetail="true" />
    <EmailForm @closeError="closeError" @closeSent="closeSent" @sendEmail="sendEmail" />

</template>