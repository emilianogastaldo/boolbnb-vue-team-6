<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'BaseGallery',

    props: {
        flats: Array,
    },

    methods: {
        // per creare un url assoluto per le immagini, sarebbe bello se funzionasse
        createPath(img) {
            const url = new URL(this.flats.image, import.meta.url);
            return url;

        },


    },

}
</script>

<template>
    <div class="jumbotron my-3">
        <div class="row">
            <div class="col" v-for="flat in flats" :key="flat.id">
                <figure>
                    <img class="img-fluid" src="" alt="{{ flat.title }}">
                </figure>
                <figcaption>
                    <h5>{{ flat.title }}</h5>
                    <address>{{ flat.address }}</address>
                </figcaption>
                <div class="heart">
                    <font-awesome-icon :icon="'fas fa-heart'" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* row */
.row {
    flex-wrap: nowrap;
    overflow: hidden;
    transition: transform 1s ease-in-out;
    position: relative;



    figure {
        width: 150px;
        height: 200px;
        overflow: hidden;
        cursor: pointer;

        img {
            transition: scale 0.7s ease;

            &:hover {
                scale: 1.1;
            }
        }
    }
}

.col {
    position: relative;

    .heart {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;

        .red {
            color: red;
        }
    }
}
</style>