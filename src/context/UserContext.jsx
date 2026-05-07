import { createContext, useState } from "react";
import { login, logout, register } from "../api/services/auth.services";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = async (data) => {
    const response = await login(data);
    return response;
  };

  const handleRegister = async (data) => {
    const response = await register(data);
    return response;
  };

  const handleLogut = async () => {
    const response = await logout();
    if (response.status == 200) {
      localStorage.clear();
    }
    return response;
  };

  return (
    <UserContext.Provider
      value={{
        handleLogut,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
