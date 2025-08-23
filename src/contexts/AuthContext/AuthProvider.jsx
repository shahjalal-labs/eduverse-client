import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";
import useFirebaseUtils from "../../firebase/firebaseUtility";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const firebaseUtils = useFirebaseUtils(setLoading);
  const authInfo = {
    loading,
    user,
    ...firebaseUtils,
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);

      if (currentUser?.email) {
        axios
          .post(
            "https://server-edu-verse.vercel.app/api/v1/auth/create-jwt",
            // "http://localhost:5000/api/v1/auth/create-jwt",
            { email: currentUser.email },
            { withCredentials: true },
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      }
    });

    return () => cleanUp();
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
