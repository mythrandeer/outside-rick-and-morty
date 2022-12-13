import React, { createContext, useState, useContext } from "react";

interface AppContextProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  resultCount: number;
  setResultCount: React.Dispatch<React.SetStateAction<number>>;
}

// While we could have used props to fulfil this use case,
// I simply wanted to demonstrate the usage of Context for state management.
// We could also optimize re-renders caused by state updates by using context selectors.
const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userName, setUserName] = useState("Rick & Morty");
  const [resultCount, setResultCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        resultCount,
        setResultCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
