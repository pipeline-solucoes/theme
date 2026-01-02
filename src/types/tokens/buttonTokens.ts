import { PipelineSolucoesTypographyTokens } from "./typographyTokens";

export type ButtonKind = "primary" | "secondary" | "tertiary" | "delete" | "none";

export interface PipelineSolucoesButtonTokens {
  background?: string;
  color?: string;
  
  backgroundHover?: string;  
  colorHover?: string;
  
  backgroundDisabled?: string;
  colorDisabled?: string;  

  borderRadius?: string;
  boxShadow?: string;
  border? : string;

  padding?: string;
  margin?: string;

  typography?: PipelineSolucoesTypographyTokens;
}

