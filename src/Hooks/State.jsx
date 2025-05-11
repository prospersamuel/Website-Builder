
import { createContext, useContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true)
  const [editingBar, setEditingBar] = useState(false)


  
  return (
    <context.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        darkMode,
        setDarkMode,
        editingBar,
        setEditingBar
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
export function Context() {
  return useContext(context);
}
