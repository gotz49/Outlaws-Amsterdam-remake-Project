// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, where } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAjVmE9ecyJAOjV0F8w1hWePH_uVGkaQjs",
	authDomain: "ecomm-reactjs-sdproject.firebaseapp.com",
	projectId: "ecomm-reactjs-sdproject",
	storageBucket: "ecomm-reactjs-sdproject.appspot.com",
	messagingSenderId: "266180901605",
	appId: "1:266180901605:web:073722befffd14208af20c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (id) => {
	let q;
	if (id) {
		q = query(collection(db, "Products"), where("categoryId", "==", parseInt(id)));
	} else {
		q = query(collection(db, "Products"));
	}
	const querySnapshot = await getDocs(q);
	const dataFromFirestore = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return dataFromFirestore;
};

export const firestoreOneFetch = async (item) => {
	const docRef = doc(db, "Products", item);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() };
	} else {
		console.log("No such document!");
	}
};