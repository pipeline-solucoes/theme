import { ButtonKind, PipelineSolucoesButtonTokens } from "./tokens/buttonTokens";
import { PipelineSolucoesChipTokens } from "./tokens/chipTokens";
import { PipelineSolucoesModalTokens } from "./tokens/displayTokens";
import { PipelineSolucoesDrawerTokens } from "./tokens/drawerTokens";
import { PipelineSolucoesFooterTokens } from "./tokens/footerTokens";
import { PipelineSolucoesFieldTokens, PipelineSolucoesNotificationFormTokens } from "./tokens/formTokens";
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
    background? : string;
    borderRadius? : string;
    border? : string;
    boxShadow? : string;
    chip?: PipelineSolucoesChipTokens;
    label?: PipelineSolucoesFieldTokens;
    field?: PipelineSolucoesFieldTokens;    
    notification?: PipelineSolucoesNotificationFormTokens;    
    button?: PipelineSolucoesButtonTokens;   
  },
  footer?: PipelineSolucoesFooterTokens;
  notification?: PipelineSolucoesNotificationTokens;
  display?: {
    modal?: PipelineSolucoesModalTokens;
  }
  drawer?: PipelineSolucoesDrawerTokens;
}
