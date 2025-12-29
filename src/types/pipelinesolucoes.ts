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

export interface PipelineSolucoesFormTokens {
  notification?: {
    background: string;
  };
  field?: {
    background?: string;
    backgroundDisabled?: string;
    color?: string;
    colorFocused?: string;
    colorDisabled?: string;
    borderRadius?: string;
    boxShadow?: string;
    borderColor?: string;
    padding?: string;
  };
}

/**
 * Aqui é o "contrato" único do Theme.pipesol
 * (vai crescer com o tempo: cards, menu, section, etc.)
 */
export interface PipelineSolucoesThemeTokens {
  buttons?: Partial<Record<ButtonKind, PipelineSolucoesButtonTokens>>;
  forms?: PipelineSolucoesFormTokens;
}
