<script>
export default {
    name: 'BaseCarousel',
    props: {
        flats: Array,
    },
    data: () => ({
        currentId: 1
    }),
    computed: {
        activeId() {
            return this.currentId === flats['id'];
        }
    }
}
</script>

<template>
    <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div v-for="flat in flats" :key="flat.id" class="carousel-item" :class="{ 'active': activeId === flat.id }">
                <img class="d-block" :src="flat.image" :alt="flat.title">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ flat.title }}</h5>
                    <p>{{ flat.decription }}</p>
                </div>


            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#carousel {}
</style>