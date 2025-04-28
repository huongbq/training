// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProviderCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used inside ThemeProviderCustom");
  return context;
};
