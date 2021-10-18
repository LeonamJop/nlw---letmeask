import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';


export const firebaseConfig = {
    apiKey: "AIzaSyCCd7lWWPqwblGTqLP--kB_NVRgs73SpyY",
    authDomain: "letmeask---nlw-6f482.firebaseapp.com",
    databaseURL: "https://letmeask---nlw-6f482-default-rtdb.firebaseio.com",
    projectId: "letmeask---nlw-6f482",
    storageBucket: "letmeask---nlw-6f482.appspot.com",
    messagingSenderId: "633934005354",
    appId: "1:633934005354:web:f2934fde296bc83476b613"
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const database = firebase.database();

export{firebase, auth, database}