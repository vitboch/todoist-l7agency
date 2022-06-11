import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCSSjEs9uR7f-jpLXvSHqa3N5u6ahDtIxk",
    authDomain: "todoist-l7.firebaseapp.com",
    databaseURL: "todoist-l7.firebaseio.com",
    projectId: "todoist-l7",
    storageBucket: "todoist-l7.appspot.com",
    messagingSenderId: "849022066906",
    appId: "1:849022066906:web:9e8fd99369c7c11c3285e3"
});

export { firebaseConfig as firebase }