import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}

export const app = initializeApp(firebaseConfig)


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCTDd8_vI19OtfXlcvCNRrWf5csinlBUzc",
//   authDomain: "stayvista-ec31c.firebaseapp.com",
//   projectId: "stayvista-ec31c",
//   storageBucket: "stayvista-ec31c.appspot.com",
//   messagingSenderId: "213323708278",
//   appId: "1:213323708278:web:2a19b04d9ba506bd3cec57"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);



