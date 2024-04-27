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
        <div class="card p-2 text-decoration-none" v-if="isDetail">
            <img :src="flat.image" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ flat.title }}</h5>
                <p class="card-text">{{ flat.address }}</p>
                <RouterLink to="/" class="btn btn-primary">Torna indietro</RouterLink>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss"></style>
