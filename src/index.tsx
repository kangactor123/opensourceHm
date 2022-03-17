import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./globalStyle";
import { theme } from "./theme";
import { StylesProvider } from "@mui/styles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
