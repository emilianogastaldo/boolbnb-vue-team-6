<script>
import axios from 'axios';
const baseUri = 'http://localhost:8000/api/flats/';
export default {
    name: 'SearchForm',
    data: () => ({
        address: '',

    }),
    emits: ['sent-form']
}
</script>


<template>

    <form @submit.prevent="$emit('sent-form', address)">

        <div class="input-box">
            <div class="d-flex flex-column">
                <label for="address">Indirizzo</label>
                <input id="address" type="text" v-model.trim="address" placeholder="Cerca un appartamento..." @keyup="">
            </div>


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
    background-color: rgb(246, 206, 206);
    border-radius: 30px
}

input {
    padding: 5px;
    border: none;
    border-radius: 15px;

}

.input-box {
    position: relative;
    display: flex;
    flex-basis: 25%;
    padding: 10px 30px 10px 10px;

    div {

        padding-left: 10px;
    }
}

button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 5px;
}
</style>