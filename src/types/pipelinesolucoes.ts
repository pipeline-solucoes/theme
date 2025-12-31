export type ButtonKind = "primary" | "secondary" | "tertiary" | "delete" | "none";

export interface PipelineSolucoesLinkTokens {  
  color?: string;   
  colorHover?: string;  
  colorDisabled?: string;  

  padding?: string;
  margin?: string;
}


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
}

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
}

export interface PipelineSolucoesFormTokens {
  notification?: {
    background: string;
  };
  field?: PipelineSolucoesFieldTokens;
  login?: {    
    background? : string;
    borderRadius? : string;
    border? : string;
    boxShadow? : string;
    button?: PipelineSolucoesButtonTokens;
    field?: PipelineSolucoesFieldTokens;
    link?: PipelineSolucoesLinkTokens;
    divider?: string;
  }
}

/**
 * Aqui é o "contrato" único do Theme.pipesol
 * (vai crescer com o tempo: cards, menu, section, etc.)
 */
export interface PipelineSolucoesThemeTokens {
  buttons?: Partial<Record<ButtonKind, PipelineSolucoesButtonTokens>>;
  forms?: PipelineSolucoesFormTokens;
}
