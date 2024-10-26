import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
  currentUser: UserInterface ;
}
interface UserInterface {
  uid: string;
    photoURL: string;
    displayName: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext<AuthContextProps>();



export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};