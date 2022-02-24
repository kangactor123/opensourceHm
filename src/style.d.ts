import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: {
      background: string;
      font: string;
    };
    light: {
      background: string;
      font: string;
    };
  }
}
