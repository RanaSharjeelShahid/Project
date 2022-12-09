import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOnHo48w3KFg1sHzrJIPCvtqmmpigjjd0",
    authDomain: "react-chat-app-49f91.firebaseapp.com",
    databaseURL: "https://react-chat-app-49f91-default-rtdb.firebaseio.com",
    projectId: "react-chat-app-49f91",
    storageBucket: "react-chat-app-49f91.appspot.com",
    messagingSenderId: "494848058743",
    appId: "1:494848058743:web:4b8e47e6f6da065965ed72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();