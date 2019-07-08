import * as firebaseApp from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyD4Mu8bsVqZvZqofRmwuMRL0e4JtmlIy5s",
    authDomain: "943218161907-3qbh7dvqtgvbr3httbsnf9sgocf4cts0.apps.googleusercontent.com",
    databaseURL: "https://fir-poc-fc516.firebaseio.com",
    projectId: "fir-poc-fc516",
    storageBucket: "fir-poc-fc516.appspot.com",
    messagingSenderId: "943218161907"
};

// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);
export let firebase = firebaseApp;


