import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

//-----------------------Importar Funciones para carga de colección desde .json-------------
// import { collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
       <App />
    </HashRouter>
   
  </React.StrictMode>
);

//--------------------FUNCION PARA CARGAR COLECCION EN FIRESTORE---------------------------
// books.forEach ((book) => {
//   addDoc (collection(db,"books"),book)
//   .then ( (docRef) => {
//     console.log("Doc agregado con id", docRef.id)
//   })
//   .catch ((error) => {
//     console.error("error al agregar doc")
//   })
// })
//-----------------------------------------------------------------------------------------

