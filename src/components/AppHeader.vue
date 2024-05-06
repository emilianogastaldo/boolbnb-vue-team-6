<script>
import SearchForm from './SearchForm.vue';
import axios from 'axios';
import { store } from '../data/store';
export default {
    name: 'AppHeader',
    components: {
        SearchForm
    },
    methods: {
        saveAddress(address) {
            // stampo l'indirizzo in console
            console.log(address);
            // lo salvo nello store
            store.address = address;
        }
    }
}

</script>

<template>
    <header class="position-relative">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <div class="d-flex align-items-center">
                    <h1 class="me-2">BoolBnb</h1>
                    <RouterLink to="/" class="home">
                        Home
                    </RouterLink>
                    <RouterLink class="ms-3 home" :to="{ name: 'filter' }">
                        Filtri
                    </RouterLink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <SearchForm @sent-form="saveAddress" class="" />
                    <ul class="navbar-nav text-end">
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8000/login">Accedi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8000/register">Registrati</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
header {
    height: 80px;
}

nav {
    background-color: #051E34;
    color: white;
}

h1 {
    color: #FF9900;
}

a {
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
}

a:hover {
    color: white;
}

.home {
    text-decoration: none;
}

button {
    background-color: white;
}
</style>