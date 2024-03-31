import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "./styles/THEME";
import { Routers } from "./routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle />

      <Routers />
    </ThemeProvider>
  </React.StrictMode>
);
