'use client';
import React, { ReactElement } from 'react';
import { Box, IconButton, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !['background_color', 'padding', 'border'].includes(prop as string),
})<{
  background_color: string;
  padding: string;
  border: string;
}>(({ background_color, padding, border }) => ({
  backgroundColor: background_color,
  padding: padding,
  borderRadius: '50%',
  display: 'inline-block',
  border: border,
}));


export interface CircularIconLinkProps {  
  children: ReactElement<HTMLImageElement> | ReactElement<SvgIconProps>;
  url?: string;
  background_color: string;
  aria_label: string;
  padding?: string;
  border?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
}

/**
 * Componente que exibe um ícone/imagem dentro de um container circular clicável,
 * ideal para links de redes sociais ou ações rápidas com aparência consistente.
 *
 * @param {React.ReactElement<HTMLImageElement> | React.ReactElement<SvgIconProps>} children Ícone do Material UI (`<SvgIcon>`) ou uma imagem (`<img>`) renderizada dentro do botão. Obrigatório.
 * @param {string} [url] URL a ser aberta ao clicar (opcional se `onClick` for usado).
 * @param {string} background_color Cor de fundo do círculo. Obrigatório.
 * @param {string} aria_label Texto de acessibilidade aplicado no `aria-label` do botão. Obrigatório.
 * @param {string} [padding="4px"] Espaçamento interno do círculo.
 * @param {string} [border="none"] Estilo da borda do círculo.
 * @param {boolean} [openInNewTab=true] Se `true`, abre a `url` em nova aba; caso contrário abre na mesma aba.
 * @param {() => void} [onClick] Callback de clique customizado. Se definido, tem prioridade sobre a abertura da `url`.
 *
 * @example
 * ```tsx
 * import InstagramIcon from '@mui/icons-material/Instagram';
 * import { CircularIconLink } from '@/components';
 *
 * const Example = () => {
 *   return (
 *     <CircularIconLink
 *       url="https://instagram.com/sua_conta"
 *       aria_label="Abrir Instagram"
 *       background_color="#E1306C"
 *       padding="6px"
 *       border="2px solid rgba(255,255,255,0.3)"
 *       openInNewTab
 *     >
 *       <InstagramIcon sx={{ color: '#fff' }} />
 *     </CircularIconLink>
 *   );
 * };
 * ```
 */
const CircularIconLink: React.FC<CircularIconLinkProps> = ({
  url,
  background_color = 'transparent',
  aria_label,
  padding = '4px',
  border = 'none',
  children,
  openInNewTab = true,
  onClick,
}) => {
  const handleClick = () => {
    if (url) {
      const target = openInNewTab ? '_blank' : '_self';
      const features = openInNewTab ? 'noopener noreferrer' : '';
      window.open(url, target, features);
    }
  };

  return (
    <StyledBox background_color={background_color} padding={padding} border={border}>
      <IconButton aria-label={aria_label} onClick={onClick || handleClick}>
        {children}
      </IconButton>
    </StyledBox>
  );
};

CircularIconLink.displayName = 'CircularIconLink';
export default CircularIconLink;
