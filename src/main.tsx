import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";

import { App } from "@/App.tsx";

import { theme } from "@/providers/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/six-pew">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
