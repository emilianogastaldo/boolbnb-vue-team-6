<script>
export default {
    name: 'BaseCarousel',
    props: {
        flats: Array,
    },
    data: () => ({
        currentId: 0,
        flat: null,
    }),
    /* computed: {
        activeId() {

            return this.currentId === this.flat['id'];
        }
    }, */
    methods: {
        destructureFlat() {
            const { flat } = this.flats;
            return this.flat = flat;
        }
    }

}
</script>

<template>
    <div id="carousel" class="carousel slide text-center" data-ride="carousel">

        <div v-for="flat in flats" :key="flat.id" class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block img-fluid" :src="flat.image" :alt="flat.title">
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5>{{ flat.title }}</h5>
                <p>{{ flat.address }}</p>
            </div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
#carousel {
    width: 100%;
    height: 100%;
}
</style>