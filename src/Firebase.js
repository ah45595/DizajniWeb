
import firebase from 'firebase';
import store from './store';


const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyDANBd5Bdlk39XaDrsza7DFwyjFf5SMi4U",
    authDomain: "it-news-21166.firebaseapp.com",
    databaseURL: "https://it-news-21166-default-rtdb.firebaseio.com",
    projectId: "it-news-21166",
    storageBucket: "it-news-21166.appspot.com",
    messagingSenderId: "67630456827",
    appId: "1:67630456827:web:08ada441d760489a5db55e"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser",user);
});
firebase.getCurrentUser = () =>{
    return new Promise((resolve,reject)=> { 
        const unsubscribe =firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);

        },reject);
    })
};

export default firebase;
