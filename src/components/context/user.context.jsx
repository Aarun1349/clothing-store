import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "../../utility/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        console.log(user);
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
