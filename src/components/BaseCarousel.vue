<script>
export default {
    name: 'BaseCarousel',
    props: {
        flats: Array,
    },
    data: () => ({
        currentId: 0
    }),
    methods: {
        goToThePrev() {
            const firstId = this.flats.length - 1;
            if (this.currentId === 0) this.currentId = firstId;
            else this.currentId--;
        },
        goToTheNext() {
            const lastId = this.flats.length - 1;
            if (this.currentId === lastId) this.currentId = 0;
            else this.currentId++;
        }
    }

}
</script>

<template>
    <div id="carousel" class="carousel slide text-center">
        <button @click="goToThePrev"></button>
        <div v-for="flat in flats" :key="flat.id" class="carousel-inner">
            <figure class="carousel-item" :class="{ 'active': flat.id === currentId }">
                <img class="d-block img-fluid" :src="flat.image" :alt="flat.title">
                <figcaption>
                    <h5>{{ flat.title }}</h5>
                    <p>{{ flat.address }}</p>
                </figcaption>
            </figure>

        </div>
        <button @click="goToTheNext"></button>


    </div>

</template>

<style lang="scss" scoped>
#carousel {
    width: 100%;
    height: 100%;
    border: 1px solid black;
}

button {
    width: 50px;
    height: 50px;
}
</style>