import { createContext, useState, useContext } from "react";
import { login } from "./helpers/login";

export const User = () => {
  return useContext(UserContext);
};
export const UpdateUser = () => {
  return useContext(UserContextUpdate);
};
export const UserContext = createContext();
export const UserContextUpdate = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLogged = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={userLogged}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};
