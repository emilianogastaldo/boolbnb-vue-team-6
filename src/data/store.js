import { reactive } from 'vue';

export const store = reactive({
    isLoading: false,
    baseUri : 'http://localhost:8000/api/flats/'
});