import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebaseUtils = (setLoading) => {
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  return {
    googleSignIn,
    githubSignIn,
    signoutUser,
    signInUser,
    registerUser,
  };
};

export default useFirebaseUtils;
