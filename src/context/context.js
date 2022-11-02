import { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(undefined);

  return (
    <userContext.Provider value={{ token, setToken }}>
      {children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };
