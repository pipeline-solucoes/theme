import "@mui/material/styles";

export type ButtonKind = "primary" | "secondary" | "tertiary" | "delete" | "none";

export interface PipeSolButtonTokens {
  background: string;
  backgroundHover: string;
  color: string;
  colorHover: string;
  borderRadius: string;
  boxShadow?: string;
  padding: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    pipesol?: {
      buttons?: Partial<Record<ButtonKind, PipeSolButtonTokens>>;
    };
  }

  interface ThemeOptions {
    pipesol?: {
      buttons?: Partial<Record<ButtonKind, PipeSolButtonTokens>>;
    };
  }
}