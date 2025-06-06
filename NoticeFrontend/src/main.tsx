import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import customTheme from "../theme/customTheme.ts";
import './index.css'
import App from './App.tsx'
import IndiceEntes from "./componentes/entes/IndiceEntes.tsx";


createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={customTheme}>
      <StrictMode>
      <IndiceEntes/>
      {/* <PruebaCors/> */}    
    </StrictMode>
  </ThemeProvider>
);
