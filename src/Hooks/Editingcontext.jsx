
import { createContext, useContext, useState } from "react";

export const context = createContext();

const EditingContextProvider = ({ children }) => {

  const [fontSize, setFontSize] = useState(15);
  
  return (
    <context.Provider
      value={{
        fontSize,
        setFontSize
      }}
    >
      {children}
    </context.Provider>
  );
};

export default EditingContextProvider;
export function EditingContext() {
  return useContext(context);
}
