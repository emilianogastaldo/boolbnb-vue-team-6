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
        <!-- Immagine -->
        <div class="img-container text-center mt-3">
            <img :src="flat.image" class="img-fluid rounded flat-img" :alt="flat.title">
        </div>
        <!-- Titolo e Indirizzo -->
        <div class="row">
            <div class="col-12 text-center">
                <h3>{{ flat.title }}</h3>
                <h5>{{ flat.address }}</h5>
            </div>
        </div>
        <!-- Descrizione -->
        <div class="row border-bottom desc text-center">
            <div class="col-12">
                <p>{{ flat.description }}</p>
            </div>
        </div>

        <!-- Bagni e stanze -->
        <div class="row row-cols-1 text-center mt-2 mb-2 pb-2 border-bottom more-infos">
            <h5>Informazioni sull'appartamento</h5>
            <div class="col">
                <p class="mb-0">Numero di stanze: {{ flat.room }}</p>
            </div>
            <div class="col">
                <p class="mb-0">Numero di bagni: {{ flat.bathroom }}</p>
            </div>
        </div>

        <!-- Servizi -->
        <section class="mx-auto mb-4 text-center services border-bottom pb-3">
            <h5>Servizi offerti</h5>
            <div class="row row-cols-2">
                <div class="col" v-for="service in flat.services" :key="service.id">
                    <span class="badge text-bg-dark same-w">{{ service.name }}: <font-awesome-icon
                            :icon="service.icon" /></span>
                </div>
            </div>
        </section>

        <!-- Mappa -->
        <div class="row">
            <div class="d-flex align-items-center justify-content-center">
                <FlatMap :lon="flat.longitude" :lat="flat.latitude" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    border: none;
}

.flat-img {
    max-width: 800px;
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
</style>
