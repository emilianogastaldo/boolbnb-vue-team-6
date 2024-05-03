<script>

export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="container-fluid pt-4">
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-2 text-center">
                <div class="col">
                    <ul>
                        <li class="h1">BoolBnb</li>
                        <div class="d-flex gap-3 justify-content-center pointer">
                            <li><font-awesome-icon :icon="'fa-brands fa-square-facebook'" /></li>
                            <li><font-awesome-icon :icon="'fa-brands fa-youtube'" /></li>
                            <li><font-awesome-icon :icon="'fa-brands fa-x-twitter'" /></li>
                            <li><font-awesome-icon :icon="'fa-brands fa-instagram'" /></li>
                        </div>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li class="h5">CHI SIAMO</li>
                        <div class="d-flex gap-3 justify-content-center pointer">
                            <li>Claudio</li>
                            <li>Matteo</li>
                            <li>Daniele</li>
                            <li>Emiliano</li>
                        </div>
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
    height: 200px;
}

ul {
    list-style-type: none;

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