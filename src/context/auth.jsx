import React, { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
  
    if (token) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: token,
      }));
    }
  }, []);
  
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
