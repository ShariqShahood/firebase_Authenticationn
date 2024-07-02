import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyAdK_FBao0wXg__AwydQHooJEBUw2De0e4",
    authDomain: "shariq-practice.firebaseapp.com",
    projectId: "shariq-practice",
    storageBucket: "shariq-practice.appspot.com",
    messagingSenderId: "648508738028",
    appId: "1:648508738028:web:fe38eb447e93d54c8358c9"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
  }
