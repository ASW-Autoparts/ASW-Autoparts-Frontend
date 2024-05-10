// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCU0_REMtI7hRZYc_XPKMH9Dp2oDqCvDxI',
    authDomain: 'asw-autoparts.firebaseapp.com',
    projectId: 'asw-autoparts',
    storageBucket: 'asw-autoparts.appspot.com',
    messagingSenderId: '213736691616',
    appId: '1:213736691616:web:14c5c73c0a77c37bf036c5',
    measurementId: 'G-R03D84NPSX',
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export default db;
