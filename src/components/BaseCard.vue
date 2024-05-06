<script>
import FlatMap from './FlatMap.vue';

export default {
    name: 'BaseCard',
    components: {
        FlatMap
    },
    props: {
        flat: Object,
        isDetail: Boolean
    },
}
</script>

<template>
    <div>
        <RouterLink :to="{ name: 'detail', params: { slug: flat.slug } }" class="card p-2 text-decoration-none"
            v-if="!isDetail">
            <img :src="flat.image" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ flat.title }}</h5>
                <p class="card-text">{{ flat.address }}</p>
            </div>
        </RouterLink>
    </div>
    <div v-if="isDetail">
        <div class="row">
            <!-- Immagine -->
            <div class="col-12 col-md-6 col-lg-6 img-container text-center mt-3">
                <img :src="flat.image" class="image-fluid rounded flat-img" :alt="flat.title">
            </div>
            <div class="col-12 col-md-6 col-lg-6 mt-2">
                <!-- Titolo -->
                <h3>{{ flat.title }}</h3>
                <!-- Indirizzo -->
                <h5>{{ flat.address }}</h5>
                <!-- Descrizione -->
                <p>{{ flat.description }}</p>
                <!-- Stanze e bagni -->
                <h5>Informazioni sull'appartamento</h5>
                <p class="mb-0">Numero di stanze: {{ flat.room }}</p>
                <p>Numero di bagni: {{ flat.bathroom }}</p>
                <!-- Servizi -->
                <h5 class="text-center">Servizi presenti nell'appartamento</h5>
                <div class="row text-center">
                    <div class="col-12 col-md-6 col-lg-6" v-for="service in flat.services" :key="service.id">
                        <span class="badge text-bg-dark same-w">{{ service.name }}: <font-awesome-icon
                                :icon="service.icon" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    border: none;
}

.flat-img {
    max-width: 750px;
}

.same-w {
    width: 180px;
}

.services {
    width: 400px;
}

.desc {
    width: 400px;
    margin: 0 auto;
}

.more-infos {
    width: 400px;
    margin: 0 auto;
}

.image-fluid {
    width: 100%;
    height: auto;
}
</style>
