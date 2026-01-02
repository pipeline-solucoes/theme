import { BorderProps } from "../props/BorderProps";
import { ColorProps } from "../props/ColorProps";
import { IconProps } from "../props/IconProps";
import { LayoutProps } from "../props/LayoutProps";

export interface PipelineSolucoesNotificationTokens
  extends Pick<ColorProps, 'background' | 'color'>,
  BorderProps,
  LayoutProps {

    success?: PipelineSolucoesNotificationIconTokens;
    error?: PipelineSolucoesNotificationIconTokens;
    warning?: PipelineSolucoesNotificationIconTokens;
    info?: PipelineSolucoesNotificationIconTokens;
  }

export interface PipelineSolucoesNotificationIconTokens
  extends Pick<IconProps, 'icon' | 'color' | 'size'> {}