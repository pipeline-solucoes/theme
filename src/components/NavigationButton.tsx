'use client';

import React from 'react';
import { styled, TypographyVariant } from '@mui/material/styles';
import { ButtonKind } from "../types/pipesol-buttons";
import { ButtonStyleProps } from './StyledButton';
import { COMMON_STYLE_FORWARD_PROPS } from '../types/CommonForwardProps';
import { Typography } from '@mui/material';
import { CommonStyleProps } from "../types/style/CommonStyleProps";
import { PipeSolButtonTokens } from '../types/pipesol-buttons';

const ButtonStyled = styled('a', {
  shouldForwardProp: (prop) =>
    ![ 'kind', ...COMMON_STYLE_FORWARD_PROPS ].includes(prop as string),
})<ButtonStyleProps>(
  ({
    theme,
    kind,
    background,
    backgroundHover,
    colorText,
    colorHover,
    padding,
    borderRadius,
    border,
    width,
    margin,
    boxShadow,
  }) => {

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
      width: width ?? 'auto',      
      margin: margin ?? '0',
      padding: tokens ? tokens.padding : padding,

      borderRadius: tokens ? tokens.borderRadius : borderRadius,
      boxShadow: tokens ? tokens.boxShadow : boxShadow,
      border,
      textDecoration: 'none',
      textTransform: 'none',
      cursor: 'pointer',
      textAlign: 'center',

      background: tokens ? tokens.background : background,
      color: tokens ? tokens.color : colorText,

      '&:hover': {
        background: tokens
          ? tokens.backgroundHover
          : backgroundHover ?? background,
        color: tokens ? tokens.colorHover : colorHover ?? colorText,
      },
    };
  }
);

interface NavigationButtonProps extends CommonStyleProps  {
  kind?: ButtonKind;
  variant?: TypographyVariant;
  text: string;
  aria_label: string;
  url: string;  
}

/**
 * Botão de navegação reutilizável baseado em um link (`<a>`), estilizado com Material UI.
 *
 * Regras de navegação:
 * - Se `url` contiver `http`, o link é tratado como externo e abre em nova aba.
 * - Caso contrário, é tratado como link interno ou âncora.
 *
 * Uso da prop `kind`:
 * - A prop `kind` aplica estilos automaticamente a partir dos tokens
 *   definidos no tema do projeto (`theme.pipesol?.buttons`) conforme README”.
 * - Para utilizar `kind`, é necessário que o projeto implemente essa
 *   estrutura no `ThemeProvider`.
 * - Caso o tema não possua essa configuração, o componente continuará
 *   funcionando normalmente, utilizando apenas os valores informados
 *   via props ou os padrões do Material UI.
 *
 * @param {ButtonKind} [kind="none"] Tipo de botão baseado nos tokens do tema.
 * @param {string} url URL ou âncora de destino.
 * @param {string} aria_label Texto para acessibilidade.
 * @param {string} [background] Cor de fundo do botão.
 * @param {string} [backgroundHover] Cor de fundo no hover.
 * @param {string} [colorText] Cor do texto.
 * @param {string} [colorHover] Cor do texto no hover.
 * @param {string} [border="none"] Borda do botão.
 * @param {string} [borderRadius="0"] Raio da borda.
 * @param {string} [boxShadow="none"] Sombra do botão.
 * @param {string} width Largura do botão.
 * @param {string} [margin="0"] Margem externa.
 * @param {string} [padding="8px 24px"] Espaçamento interno.
 * @param {string} [text] Texto do botão.
 * @param {TypographyVariant} [variant="body1"] Variante da tipografia usada no texto.
 *
 * @example
 * ```tsx
 * <NavigationButton
 *   kind="primary"
 *   url="#contato"
 *   aria_label="Ir para contato"
 *   width="fit-content"
 * >
 *   Fale conosco
 * </NavigationButton>
 * ```
 */
const NavigationButton: React.FC<NavigationButtonProps> = ({
  url,
  text,
  kind = 'none',
  aria_label,
  background,
  backgroundHover,
  colorText,
  colorHover,
  borderRadius = '0',
  border = 'none',
  boxShadow = 'none',
  width,
  margin = '0',
  padding = '8px 24px',
  variant = "body1",  
}) => {
  if (url.includes('http')) {
    return (
      <ButtonStyled
        kind={kind}
        href={url}
        width={width}
        background={background}
        backgroundHover={backgroundHover}
        colorText={colorText}
        colorHover={colorHover}
        borderRadius={borderRadius}
        border={border}
        padding={padding}
        margin={margin}
        aria-label={aria_label}
        target="_blank"
        rel="noopener noreferrer"
        boxShadow={boxShadow}
      >
        <Typography variant={variant}>{text}</Typography>
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled
      kind={kind}
      href={url}
      width={width}
      background={background}
      backgroundHover={backgroundHover}
      colorText={colorText}
      colorHover={colorHover}
      borderRadius={borderRadius}
      border={border}
      padding={padding}
      margin={margin}
      aria-label={aria_label}
      boxShadow={boxShadow}
    >
      <Typography variant={variant}>{text}</Typography>
    </ButtonStyled>
  );
};

NavigationButton.displayName = 'NavigationButton';
export default NavigationButton;
