import { ButtonKind, PipelineSolucoesButtonTokens } from "./tokens/buttonTokens";
import { PipelineSolucoesFieldTokens, PipelineSolucoesLoginFormTokens, PipelineSolucoesNotificationFormTokens } from "./tokens/formTokens";
import { PipelineSolucoesTypographyTokens } from "./tokens/typographyTokens";


/**
 * Aqui é o "contrato" único do Theme.pipesol
 * (vai crescer com o tempo: cards, menu, section, etc.)
 */
export interface PipelineSolucoesThemeTokens {
  buttons?: {
    typography?: PipelineSolucoesTypographyTokens;
    variants?: Partial<Record<ButtonKind, PipelineSolucoesButtonTokens>>;
  }
  forms?: {
    notification?: PipelineSolucoesNotificationFormTokens;
    field?: PipelineSolucoesFieldTokens;
    login?: PipelineSolucoesLoginFormTokens;
  }
}
