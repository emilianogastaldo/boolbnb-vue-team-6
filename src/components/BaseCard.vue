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
    <RouterLink :to="{ name: 'detail', params: { slug: 'flat.slug' } }" class="card p-2 text-decoration-none"
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
        </div>
    </div>

</template>

<style scoped lang="scss"></style>
