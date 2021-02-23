import fb from 'firebase';

// PROD

// DEV
const config = {
    apiKey: "AIzaSyCidyc0jxcQEAl7jxUhKV1Q0IasLjR2P9g",
    authDomain: "studiosol-kanban-api.firebaseapp.com",
    databaseURL: "https://studiosol-kanban-api-default-rtdb.firebaseio.com",
    projectId: "studiosol-kanban-api",
    storageBucket: "studiosol-kanban-api.appspot.com",
    messagingSenderId: "1028044507500",
    appId: "1:1028044507500:web:40f9a03e9070486f7e8b49",
    measurementId: "G-MDHFKR6CCP"
};

fb.initializeApp(config);

export default fb;
