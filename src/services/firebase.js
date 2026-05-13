import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

// TODO: Firebaseコンソールから取得した設定に置き換えてください
const firebaseConfig = {
  apiKey: "AIzaSyC1S2naAPQxk6Tc73d_9OSV2kfKNTu9oxY",
  authDomain: "monstaccountmanager.firebaseapp.com",
  projectId: "monstaccountmanager",
  storageBucket: "monstaccountmanager.firebasestorage.app",
  messagingSenderId: "130128068763",
  appId: "1:130128068763:web:31a70ba14fca0e0b64c63e",
  measurementId: "G-9LB81J5329",
};

// Firebase初期化
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

/**
 * Googleログインを実行
 */
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

/**
 * ログアウトを実行
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

/**
 * ユーザーデータをFirestoreに保存
 */
export const saveUserData = async (uid, data) => {
  try {
    await setDoc(
      doc(db, "users", uid),
      {
        ...data,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    );
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

/**
 * ユーザーデータをFirestoreから取得
 */
export const fetchUserData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
