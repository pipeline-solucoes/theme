import { PipelineSolucoesButtonTokens } from "./buttonTokens";
import { PipelineSolucoesLinkTokens } from "./linkTokens";
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
  
  padding?: string;  
  margin?: string;

  typography?: PipelineSolucoesTypographyTokens;
}

export interface PipelineSolucoesNotificationFormTokens {
  background?: string;
}

export interface PipelineSolucoesLoginFormTokens {
  background? : string;
  borderRadius? : string;
  border? : string;
  boxShadow? : string;
  button?: PipelineSolucoesButtonTokens;
  field?: PipelineSolucoesFieldTokens;
  link?: PipelineSolucoesLinkTokens;
  divider?: string;
}