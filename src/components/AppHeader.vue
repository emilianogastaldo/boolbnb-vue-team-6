<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class=" shadow-sm mb-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <div class="d-flex align-items-center">
                    <h1 class="me-2">BoolBnb</h1>
                    <RouterLink to="/" class="home ms-3">
                        Home
                    </routerlink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
a {
    font-weight: 500;
    font-size: 1.5rem;
}

.home {
    text-decoration: none;
    color: black;
}
</style>