"use client";

import { ThemeProvider } from "./theme/theme.context";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};
