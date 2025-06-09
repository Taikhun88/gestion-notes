"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import ThemeProvider from "@/components/ThemeProvider";
import { store } from "@/store";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}