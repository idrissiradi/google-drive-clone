import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCle9YHnYYx-1TJrSpROsYyaoRrBE02tE8",
	authDomain: "drive-clone-react.firebaseapp.com",
	projectId: "drive-clone-react",
	storageBucket: "drive-clone-react.appspot.com",
	messagingSenderId: "284632317660",
	appId: "1:284632317660:web:dcda9721fe8d77917a3e19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
