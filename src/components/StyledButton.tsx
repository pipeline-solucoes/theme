import { PipeSolButtonTokens } from "../types/pipesol-buttons";
import { ButtonKind } from "../types/pipesol-buttons";
import { COMMON_STYLE_FORWARD_PROPS } from '../types/CommonForwardProps';
import { CommonStyleProps } from "../types/style/CommonStyleProps";
import { Button, styled } from "@mui/material";

export interface ButtonStyleProps extends CommonStyleProps {
  kind: ButtonKind;
}

export const StyledButtonKind = styled(Button, {
  shouldForwardProp: (prop) => !["kind", ...COMMON_STYLE_FORWARD_PROPS ].includes(prop as string),
 })
  <ButtonStyleProps>
  (({ theme, kind = "primary", width, height, padding, margin, background, backgroundHover, colorText, colorHover, borderRadius, boxShadow }) => {
    
    let tokens: PipeSolButtonTokens | undefined;
    switch (kind) {
    case "primary":
    case "secondary":
    case "tertiary":
    case "delete":
      tokens = theme.pipesol?.buttons?.[kind];
      break;
    }


    return {
      // Dimensões
      width: width,
      height: height,      
      margin: margin,
      padding: tokens ? tokens.padding : padding,

      // Visual
      textTransform: "none",      
      borderRadius: tokens ? tokens.borderRadius : borderRadius,
      boxShadow: tokens ? tokens.boxShadow : boxShadow,

      // Cores
      background: tokens ? tokens.background : background,
      color: tokens ? tokens.color : colorText,

      "&:hover": {
        background: tokens ? tokens.backgroundHover : ( backgroundHover ?? background),
        color: tokens ? tokens.colorHover : (colorHover ?? colorText),
        boxShadow: tokens ? tokens.boxShadow : boxShadow,
      },

      // Estado disabled
      "&.Mui-disabled": {
        background: theme.palette.grey[300],
        color: theme.palette.text.disabled,
        boxShadow: "none",
      },
    };
});