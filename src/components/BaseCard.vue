<script>

export default {
    name: 'BaseCard',

    props: {
        flat: Object,
    },

    methods: {
    }

}
</script>

<template>
    <div class="card">
        <img :src="flat.image" class="card-img-top" :alt="flat.title">
        <div class="card-body">
            <h5 class="card-title">{{ flat.title }}</h5>
            <p class="card-text">{{ flat.address }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
