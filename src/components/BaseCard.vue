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
    <div class="col">
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
        <h1 class="text-center">{{ flat.title }}</h1>
        <div class="card mb-3 col-12">
            <div class="row g-0">
                <div class="col-md-4 p-2">
                    <img :src="flat.image" class="img-fluid " :alt="flat.title">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ flat.address }}</h5>
                        <p class="card-text">{{ flat.description }}</p>
                        <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                    </div>
                </div>
            </div>
            <div class="p-2">
                <h5 class="card-title">Numero di stanze: {{ flat.room }}</h5>
                <h5 class="card-title">Numero di bagni: {{ flat.bathroom }}</h5>
                <FlatMap :lon="flat.longitude" :lat="flat.latitude" />
                <h2>I servizi offerti dall'host:</h2>
                <ul class="">
                    <li v-for="service in flat.services" :key="service.id">{{ service.name }}: <font-awesome-icon
                            :icon="service.icon" :style="{ 'color': service.color }" />
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
}

.card {
    border: none;
}
</style>
