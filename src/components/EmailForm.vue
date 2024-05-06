<script>

export default {
    name: 'EmailForm',
    props: {
        isError: Boolean,
        isSent: Boolean,
        form: Object
    },
    emits: ['closeError', 'closeSent', 'sendEmail']
}
</script>

<template>
    <div class="d-flex align-items-center justify-content-center flex-column border-top mt-4 pt-2">
        <h5>Contatta il proprietario per avere più informazioni</h5>
        <div v-if="isError">
            <h2>ERRORE<button @click="$emit('closeError')">X</button></h2>
        </div>
        <div v-if="isSent">
            <h2 class="d-inline me-3">Mail Inviata</h2><button @click="$emit('closeSent')" type="button"
                class="btn-close" aria-label="Close"></button>

        </div>
        <form @submit.prevent="$emit('sendEmail', form), emptyForm" class=" mb-5">
            <div class="row g-2 d-flex align-items-center justify-content-center flex-column">
                <!-- Nome -->
                <div class="col">
                    <label for="first_name" class="form-label">Nome <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="first_name" placeholder="es: Mario"
                        v-model="form.first_name" required>
                </div>
                <!-- Cognome -->
                <div class="col">
                    <label for="last_name" class="form-label">Cognome <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="last_name" placeholder="es: Rossi"
                        v-model="form.last_name" required>
                </div>
                <!-- Email -->
                <div class="col">
                    <label for="email_sender" class="form-label">Indirizzo email <span
                            class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email_sender" placeholder="es: mario.rossi@gmail.com"
                        v-model="form.email_sender" required>
                </div>
                <!-- Messaggio -->
                <div class="col">
                    <label for="text" class="form-label">Scrivi il tuo messaggio <span
                            class="text-danger">*</span></label>
                    <textarea class="form-control" id="text" rows="10" v-model="form.text" required></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-2">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    width: 400px;
}
</style>
