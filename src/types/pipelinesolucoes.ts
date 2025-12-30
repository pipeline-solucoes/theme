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

  padding?: string;
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
}

export interface PipelineSolucoesFormTokens {
  notification?: {
    background: string;
  };
  field?: PipelineSolucoesFieldTokens;
  login?: {
    button?: PipelineSolucoesButtonTokens;
    field?: PipelineSolucoesFieldTokens;
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
