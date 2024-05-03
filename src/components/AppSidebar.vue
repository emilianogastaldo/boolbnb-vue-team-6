<script>

export default {
    name: 'AppSidebar',
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

    <div class="sidebar col-sm-1 col-md-3">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Filtri</h5>

        <div class="text-center">
            <form @submit.prevent>
                <!-- <button class="btn btn-warning" type="reset" @click="resetForm">Svuota i campi</button> -->
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
                    <div class="services" v-for="(flatService, i) in flatServices" :key="i">
                        <label class="col-5" :for="flatService.id">{{ flatService.name }}</label>
                        <input class="col-5" :id="flatService.id" type="checkbox" :value="flatService.id"
                            v-model="form.services" @change="$emit('send-form', form)">
                    </div>
                </div>
            </form>


        </div>
    </div>

</template>
<style lang="scss" scoped>
/* barra laterale */
.sidebar {
    flex-basis: 200px;
    padding: 5px;
    flex-shrink: 0;

}

/* creo un contenitore per i servizi */
.services {
    height: 200px;
    overflow: auto;
}
</style>
