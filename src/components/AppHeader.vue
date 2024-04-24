<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="p-2">
        <nav class="d-flex gap-2 h-100">
            <h1>BoolBnb</h1>
            <ul class="list-unstyled">
                <li>
                    <RouterLink to="">
                        <font-awesome-icon :icon="'fas fa-house'" />
                        Home
                    </routerlink>
                </li>
            </ul>
        </nav>
        <nav class="p-2">
            <ul class="list-unstyled d-flex gap-2">
                <li>
                    <a class="text-decoration-none" href="http://127.0.0.1:8000/login">Accedi</a>
                </li>
                <li>
                    <a class="text-decoration-none" href="http://127.0.0.1:8000/register">Registrati</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    box-shadow: 0 10px 10px #aec6b0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>