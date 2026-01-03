import { BorderProps } from "../props/BorderProps";
import { ColorProps } from "../props/ColorProps";
import { LayoutProps } from "../props/LayoutProps";
import { PipelineSolucoesTypographyTokens } from "./typographyTokens";

export interface PipelineSolucoesChipTokens 
  extends Pick<ColorProps, 'background' | 'color' | 'backgroundHover' | 'colorHover'>,
  Pick<LayoutProps, 'width' | 'height' | 'padding' | 'margin'>,
  BorderProps {
  
    typography?: PipelineSolucoesTypographyTokens;    
}