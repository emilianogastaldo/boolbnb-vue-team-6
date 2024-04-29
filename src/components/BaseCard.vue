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
        <div class="card mb-3" v-if="isDetail">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="flat.image" class="img-fluid rounded-start" :alt="flat.title">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ flat.title }}</h5>
                        <p class="card-text">{{ flat.address }}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss"></style>
