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

export { firebase, database as default };
