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
        <h1 class="">{{ flat.title }}</h1>
        <h6>{{ flat.address }}</h6>
        <figure class="show-figure">
            <img :src="flat.image" :alt="flat.title" class="show-img">
        </figure>

        <p>{{ flat.description }}</p>

        <ul>
            <li>Numero stanze: {{ flat.room }}</li>
            <li>Numero posti letto: {{ flat.bed }}</li>
            <li>Numero bagni: {{ flat.bathroom }}</li>
        </ul>

        <ul class="">
            <li v-for="service in flat.services" :key="service.id">{{ service.name }}: <font-awesome-icon
                    :icon="service.icon" :style="{ 'color': service.color }" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
// .show-img {
//     width: 50%;
// }

// .show-figure {
//     width: 100vw;
//     height: 200px;
// }

ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
