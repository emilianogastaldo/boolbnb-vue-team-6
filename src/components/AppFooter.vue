<script>

export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="container-fluid">
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-3 text-center">
                <div class="col">
                    <ul>
                        <li>LOGO SITO</li>
                        <li><font-awesome-icon :icon="'fa-brands fa-square-facebook'" /></li>
                        <li>LOGO YU</li>
                        <li>LOGO IN</li>
                        <li>LOGO X</li>
                        <!-- FARMI SPIEGARE COME REGISTRARE LE ICONE -->
                    </ul>
                </div>
                <div class="col">LOGO</div>
                <div class="col">
                    <ul>
                        <li>CHI SIAMO</li>
                        <li>Claudio</li>
                        <li>Matteo</li>
                        <li>Daniele</li>
                        <li>Emiliano</li>
                        <!-- da fare delle pagine dedicate  -->
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
</style>