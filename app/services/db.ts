import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db, "usuarios");

export const queryUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const q = query(
      usersRef,
      where("email", "==", email),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc: any) => {
      console.log(doc.id, "=>", doc.data());
    });

    return !querySnapshot.empty;
  } catch (error) {
    return false;
  }
};

export const addUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      email,
      password,
    });
    return true;
  } catch (error) {
    return false;
  }
};
