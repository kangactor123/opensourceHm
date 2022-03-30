import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./globalStyle/globalStyle";
import { StylesProvider } from "@mui/styles";
import { theme } from "./globalStyle/theme";

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
