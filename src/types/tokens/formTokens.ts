import { PipelineSolucoesTypographyTokens } from "./typographyTokens";

export interface PipelineSolucoesFieldTokens {

  background?: string;
  color?: string;

  backgroundDisabled?: string;
  colorDisabled?: string; 

  backgroundFocused?: string;
  colorFocused?: string;

  borderRadius?: string;
  boxShadow?: string;
  borderColor?: string;
  
  height?: string
  padding?: string;  
  margin?: string;

  typography?: PipelineSolucoesTypographyTokens;
}

export interface PipelineSolucoesNotificationFormTokens {
  background?: string;
}