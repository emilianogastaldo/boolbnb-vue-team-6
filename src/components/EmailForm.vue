<script>
export default {
    name: 'EmailForm',
    data: () => ({
        form: {
            first_name: '',
            last_name: '',
            email_sender: '',
            text: '',
            flat_id: '',
        },
    }),
    props: {
        isError: Boolean,
        isSent: Boolean
    },
    emits: ['closeError', 'closeSent', 'sendEmail']
}
</script>

<template>
    <h2>Contattaci per maggiori info</h2>
    <div v-if="isError">
        <h2>ERRORE<button @click="$emit('closeError')">X</button></h2>
    </div>
    <div v-if="isSent">
        <h2>Mail Inviata<button @click="$emit('closeSent')">X</button></h2>
    </div>
    <form @submit.prevent="$emit('sendEmail')" class="w-50 mb-5">
        <div class="row g-2">
            <!-- Nome -->
            <div class="col-6">
                <label for="first_name" class="form-label">Nome <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="first_name" placeholder="es: Mario"
                    v-model="form.first_name" required>
            </div>
            <!-- Cognome -->
            <div class="col-6">
                <label for="last_name" class="form-label">Cognome <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="last_name" placeholder="es: Rossi" v-model="form.last_name"
                    required>
            </div>
            <!-- Email -->
            <div class="col">
                <label for="email_sender" class="form-label">Indirizzo email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="email_sender" placeholder="es: mario.rossi@gmail.com"
                    v-model="form.email_sender" required>
            </div>
            <!-- Messaggio -->
            <div class="col-12">
                <label for="text" class="form-label">Scrivi il tuo messaggio <span class="text-danger">*</span></label>
                <textarea class="form-control" id="text" rows="10" v-model="form.text" required></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Invia</button>
    </form>
</template>