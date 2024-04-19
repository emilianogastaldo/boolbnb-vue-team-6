<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="p-2">
        <nav class="d-flex gap-2">
            <h1>BoolBnb</h1>
            <ul class="list-unstyled">
                <li>
                    <RouterLink to="">Home</routerlink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>