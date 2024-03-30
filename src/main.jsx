import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "./styles/THEME";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
