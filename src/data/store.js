import { reactive } from 'vue';

export const store = reactive({
    isLoading: false,
    baseUri: 'http://localhost:8000/api/flats/',
    endpointMail: 'http://localhost:8000/api/contact-mail/',
    apiKey: '7HTi0jsdt2LOACuuEHuHjOPmcdLsmvEw',
    images: [
        '01.jpg',
        '02.jpg',
        '03.jpg',
        '04.jpg',
        '05.jpg',

    ]
});