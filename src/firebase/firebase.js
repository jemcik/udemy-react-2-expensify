import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFOgHBctEPRXjuNgrVIf6x6PPRlCknKBc",
    authDomain: "jemcik-udemy-react-2-expensify.firebaseapp.com",
    databaseURL: "https://jemcik-udemy-react-2-expensify.firebaseio.com",
    projectId: "jemcik-udemy-react-2-expensify",
    storageBucket: "jemcik-udemy-react-2-expensify.appspot.com",
    messagingSenderId: "474287920341"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('jemcik').on('value', (data) => {
    const jemcik = data.val();
    console.log(`jemcik is ${jemcik.job} in ${jemcik.location.city}.`);
});

setTimeout(() => {
    database.ref('jemcik').update({
        job: 'gamer',
        'location/city': 'Zhytomyr'
    })
}, 3000);

// database.ref().set({
//     jemcik: {
//         age: 34,
//         isSingle: false,
//         weight: 80,
//         height: 170,
//         location: {
//             city: 'Kyiv',
//             country: 'Ukraine'
//         }
//     }
// }).then(() => {
//     console.log('jemcik set');
// });
//
// const jemcikRef = database.ref('jemcik');
// jemcikRef.update({
//     weight: 78,
//     height: 175,
//     job: 'developer'
// }).then(() => {
//     console.log('jemcik updated');
// });
