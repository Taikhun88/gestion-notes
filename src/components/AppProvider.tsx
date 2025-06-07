"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import ThemeProvider from "@/components/ThemeProvider";
import { store } from "@/store";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}