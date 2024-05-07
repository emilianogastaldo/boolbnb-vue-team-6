<script>

export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 justify-content-between">
                <div class="col-12">
                    <h2>BoolBnb</h2>
                    <ul class="d-flex gap-3 justify-content-start pointer">
                        <li><font-awesome-icon :icon="'fa-brands fa-square-facebook'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-youtube'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-x-twitter'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-instagram'" /></li>
                    </ul>
                </div>
                <div class="col-12">
                    <h5 class="text-end">CHI SIAMO</h5>
                    <ul class="d-flex gap-3 justify-content-end pointer">
                        <li>Claudio</li>
                        <li>Matteo</li>
                        <li>Daniele</li>
                        <li>Emiliano</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #051E34;
    color: white;
    flex-basis: 80px;
}

ul {
    list-style-type: none;
    padding: 0;

}

.h1 {
    color: #FF9900;
}

.pointer {
    li {
        cursor: pointer;
    }

}
</style>