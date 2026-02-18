import app from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Initialize Firebase Authentication
const auth = getAuth(app);

//SIGNUP
const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//SIGNIN
const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//LOGOUT
const logout = () => {
  return signOut(auth);
};

//PASSWORD RESET


export { auth, signup, signin, logout };
