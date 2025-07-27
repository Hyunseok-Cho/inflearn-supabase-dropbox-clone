'use client';

import { ThemeProvider } from "config/material-tailwind-theme-provider";
import ReactQueryClientProvider from "config/ReactQueryClientProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}
