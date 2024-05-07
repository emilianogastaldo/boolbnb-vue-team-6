<script>

export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="py-2">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h2>BoolBnb</h2>
                    <ul class="d-flex gap-3 justify-content-center pointer">
                        <li><font-awesome-icon :icon="'fa-brands fa-square-facebook'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-youtube'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-x-twitter'" /></li>
                        <li><font-awesome-icon :icon="'fa-brands fa-instagram'" /></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>CHI SIAMO</h5>
                    <ul class="d-flex gap-3 justify-content-center pointer">
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