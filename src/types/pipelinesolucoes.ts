import { ButtonKind, PipelineSolucoesButtonTokens } from "./tokens/buttonTokens";
import { PipelineSolucoesFooterTokens } from "./tokens/footerTokens";
import { PipelineSolucoesFieldTokens, PipelineSolucoesLoginFormTokens, PipelineSolucoesNotificationFormTokens } from "./tokens/formTokens";
import { PipelineSolucoesNotificationTokens } from "./tokens/notificationTokens";
import { PipelineSolucoesSafeAreaTokens } from "./tokens/safeAreaTokens";
import { PipelineSolucoesTypographyTokens } from "./tokens/typographyTokens";

/**
 * Aqui é o "contrato" único do Theme.pipesol
 * (vai crescer com o tempo: cards, menu, section, etc.)
 */
export interface PipelineSolucoesThemeTokens {
  safeArea?: PipelineSolucoesSafeAreaTokens;
  buttons?: {
    typography?: PipelineSolucoesTypographyTokens;
    variants?: Partial<Record<ButtonKind, PipelineSolucoesButtonTokens>>;
  }
  forms?: {
    notification?: PipelineSolucoesNotificationFormTokens;
    field?: PipelineSolucoesFieldTokens;
    login?: PipelineSolucoesLoginFormTokens;
  },
  footer?: PipelineSolucoesFooterTokens;
  notification?: PipelineSolucoesNotificationTokens;
}
