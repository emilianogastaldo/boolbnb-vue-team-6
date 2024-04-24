<script>
export default {
    name: 'SearchForm',
    data: () => ({
        search: ''
    })
}
</script>


<template>
    <form @submit.prevent="">
        <div class="input-box">
            <input type="text" v-model.trim="search" placeholder="Cerca un appartamento..." @keyup="">
            <button>
                <font-awesome-icon :icon="'fas fa-magnifying-glass'" />
            </button>
        </div>

    </form>
</template>

<style lang="scss" scoped>
form {
    position: fixed;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
}

input {
    padding: 5px 35px 5px 10px;
    border: none;
    border-radius: 15px;
}

.input-box {
    position: relative;

}

button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 195px;
}
</style>