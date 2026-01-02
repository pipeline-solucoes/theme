import { BorderProps } from "../props/BorderProps";
import { ColorProps } from "../props/ColorProps";
import { IconProps } from "../props/IconProps";
import { LayoutProps } from "../props/LayoutProps";
import { ButtonKind, PipelineSolucoesButtonTokens } from "./buttonTokens";
import { PipelineSolucoesTypographyTokens } from "./typographyTokens";

export interface PipelineSolucoesNotificationTokens
  extends Pick<ColorProps, 'background' | 'color'>,
  BorderProps,
  LayoutProps {
    
    success?: PipelineSolucoesNotificationIconTokens;
    error?: PipelineSolucoesNotificationIconTokens;
    warning?: PipelineSolucoesNotificationIconTokens;
    info?: PipelineSolucoesNotificationIconTokens;
    corfim?: PipelineSolucoesNotificationIconTokens;

    buttons?: {
      primary?: PipelineSolucoesButtonTokens;
      secondary?: PipelineSolucoesButtonTokens;
      tertiary?: PipelineSolucoesButtonTokens;
    }  
    
    typography?: PipelineSolucoesTypographyTokens;
  }

export interface PipelineSolucoesNotificationIconTokens
  extends Pick<IconProps, 'icon' | 'color' | 'size'> {}