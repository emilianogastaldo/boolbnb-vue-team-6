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
        }
    }),
    emits: ['send-form'],
}
</script>

<template>
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop">
        Ulteriori filtri
    </button>
    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">Filtri</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-center">
            <div>
                <label class="col-10" for="rooms">Numero di stanze</label>
                <input class="col-10" id="rooms" type="number" step="1" v-model.trim="form.rooms"
                    @change="$emit('send-form', form)">
            </div>
            <div>
                <label class="col-10" for="bathrooms">Numero di bagni</label>
                <input class="col-10" id="bathrooms" type="number" step="1" v-model.trim="form.bathrooms"
                    @change="$emit('send-form', form)">
            </div>
            <div class="mt-3 text-center">
                <div v-for="(flatService, i) in flatServices" :key="i">
                    <label class="col-5" for="services">{{ flatService.name }}</label>
                    <input class="col-5" id="services" type="checkbox">
                </div>
            </div>


        </div>
    </div>

</template>
