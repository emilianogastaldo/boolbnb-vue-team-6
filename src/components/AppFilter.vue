<script>

export default {
    name: 'AppFilter',
    props: {
        flats: Array,
        flatServices: Array
    },
    data: () => ({
        form: {
            rooms: '',
            bathrooms: '',
            services: [],
        }
    }),
    methods: {
        resetForm() {
            this.form.rooms = '';
            this.form.bathrooms = '';
            this.form.services = [];
        }
    },
    emits: ['send-form'],
}
</script>

<template>
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop">
        Ulteriori filtri
    </button>
    <div class="offcanvas offcanvas-start col-8" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">Filtri</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-center">
            <form>
                <button class="btn btn-warning" type="reset" @click="resetForm">Svuota i campi</button>
                <div class="row">
                    <div class="col">
                        <label class="col-10" for="rooms">Numero di stanze:</label>
                        <input class="col-10" id="rooms" type="number" min="0" step="1" v-model.trim="form.rooms"
                            @change="$emit('send-form', form)">
                    </div>
                    <div class="col">
                        <label class="col-10" for="bathrooms">Numero di bagni:</label>
                        <input class="col-10" id="bathrooms" type="number" min="0" step="1"
                            v-model.trim="form.bathrooms" @change="$emit('send-form', form)">
                    </div>
                </div>
                <div class="mt-3 text-center">
                    <div v-for="(flatService, i) in flatServices" :key="i">
                        <label class="col-5" :for="flatService.id">{{ flatService.name }}</label>
                        <input class="col-5" :id="flatService.id" type="checkbox" :value="flatService.id"
                            v-model="form.services" @change="$emit('send-form', form)">
                    </div>
                </div>
            </form>


        </div>
    </div>

</template>
