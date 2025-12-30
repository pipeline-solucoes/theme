export type ButtonKind = "primary" | "secondary" | "tertiary" | "delete" | "none";

export interface PipelineSolucoesButtonTokens {
  background: string;
  backgroundHover: string;
  color: string;
  colorHover: string;
  borderRadius: string;
  boxShadow?: string;
  padding: string;
}

export interface PipelineSolucoesFieldTokens {
  background: string;
  backgroundHover: string;
  color: string;
  colorHover: string;
  borderRadius: string;
  boxShadow?: string;
  padding: string;
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
