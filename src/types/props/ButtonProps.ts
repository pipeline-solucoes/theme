
import { TypographyVariant } from "@mui/material/styles";

export interface ButtonProps {
  textButton?: string;
  variantButton?: TypographyVariant;

  backgroundButton?: string;
  backgroundHoverButton?: string;
  colorButton?: string;
  colorHoverButton?: string;  

  borderRadiusButton?: string;
  borderButton?: string;  
  boxShadowButton?: string;

  widthButton?: string;  
  heightButton?: string;
  paddingButton?: string;
  marginButton?: string;
}

export const BUTTON_STYLE_FORWARD_PROPS = [
  "textButton",
  "variantButton",
  "backgroundButton",
  "backgroundHoverButton",
  "colorButton",
  "colorHoverButton", 
  "borderRadiusButton",
  "borderButton",
  "boxShadowButton",
  "widthButton", 
  "heightButton",
  "paddingButton",
  "marginButton",
] as const;