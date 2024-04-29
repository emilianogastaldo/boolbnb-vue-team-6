<script>

export default {
    name: 'BaseCard',

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
        <h6>{{ flat.address }}</h6>
        <div class="card mb-3">
            <div class="row">
                <div class="col">
                    <img :src="flat.image" class="img-fluid rounded-start" :alt="flat.title">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Numero stanze: {{ flat.room }}</h5>
                        <h5 class="card-title">Numero posti letto: {{ flat.bed }}</h5>
                        <h5 class="card-title">Numero bagni: {{ flat.bathroom }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <p>{{ flat.description }}</p>
        <ul class="">
            <li>
                <h2>I servizi offerti dall'host</h2>
            </li>
            <li v-for="service in flat.services" :key="service.id">{{ service.name }}: <font-awesome-icon
                    :icon="service.icon" :style="{ 'color': service.color }" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
