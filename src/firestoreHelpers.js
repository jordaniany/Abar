import { auth, db } from "./firebase"; 
import { doc, getDoc } from "firebase/firestore";

export async function isAdmin() {
  const user = auth.currentUser;
  if (!user) return false;

  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().role === "admin";
  }
  return false;
}