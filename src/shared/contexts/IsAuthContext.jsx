import React, { useState, useContext } from 'react';

export const IsAuthContext = React.createContext();

export const useIsAuthContext = () => {
  return useContext(IsAuthContext);
};

const IsAuthProvider = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(
    localStorage.getItem('userToken') || null
  );

  return (
    <IsAuthContext.Provider value={{ isAuthUser, setIsAuthUser }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default IsAuthProvider;
