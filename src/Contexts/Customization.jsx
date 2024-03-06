import { createContext, useContext, useState } from "react";

//Customization hook to change material
const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("diamond");
  return (
    <CustomizationContext.Provider value={{ material, setMaterial }}>
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
