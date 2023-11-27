import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { app, googleAuthProvider } from "./firebase";
import LogedIn from "../components/LogedIn";

const AuthProvider = (): JSX.Element => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((mu) => {
      if (mu != null) {
        setUser(mu);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      {user ? <LogedIn user={user.displayName} handleSignOut={handleSignOut}/> : <button onClick={handleLogIn}>Log In</button>}
    </div>
  );
};

export { AuthProvider };
