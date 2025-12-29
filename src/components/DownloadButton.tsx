import React from 'react';
import { styled } from '@mui/material/styles';

export interface DownloadButtonProps {
  file: string;
  fileName: string;
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  borderRadius?: string;
  boxShadow?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  arialLabel: string;
  width?: string;
  height?: string;
}

const StyledLink = styled('a', {
  shouldForwardProp: (prop) =>
    ![
      'background',
      'backgroundHover',
      'color',
      'colorHover',
      'borderRadius',
      'boxShadow',
      'width',
      'height',
    ].includes(prop as string),
})<{
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  borderRadius?: string;
  boxShadow?: string;
  width: string;
  height: string;
}>(
  ({
    background,
    backgroundHover,
    color,
    colorHover,
    borderRadius,
    boxShadow,
    width,
    height,
  }) => ({
    width,
    height,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: background || '#1976d2',
    color: color || '#fff',
    borderRadius: borderRadius || '8px',
    boxShadow: boxShadow || 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: backgroundHover || '#1565c0',
      color: colorHover || color || '#fff',
    },
  })
);

/**
 * Componente que renderiza um link estilizado como botão para **download de arquivos**
 * usando a tag `<a>` com o atributo `download`, permitindo customização visual via props.
 *
 * @param {string} file URL do arquivo a ser baixado.
 * @param {string} fileName Nome do arquivo que será salvo no disco via atributo `download`.
 * @param {string} [background="#1976d2"] Cor de fundo do botão.
 * @param {string} [backgroundHover="#1565c0"] Cor de fundo no hover.
 * @param {string} [color="#fff"] Cor do texto do botão.
 * @param {string} [colorHover] Cor do texto no hover (quando ausente, herda `color`).
 * @param {string} [borderRadius="8px"] Raio da borda do botão.
 * @param {string} [boxShadow="none"] Sombra do botão.
 * @param {React.ReactNode} [icon] Ícone exibido à esquerda do conteúdo.
 * @param {React.ReactNode} children Conteúdo do botão.
 * @param {string} arialLabel Texto de acessibilidade (`aria-label`).
 * @param {string} [width="auto"] Largura do botão.
 * @param {string} [height="fit-content"] Altura do botão.
 *
 * @example
 * ```tsx
 * import DownloadIcon from '@mui/icons-material/Download';
 * import { Typography } from '@mui/material';
 * import { DownloadButton } from '@/components/DownloadButton';
 *
 * const Example = () => (
 *   <DownloadButton
 *     file="/docs/manual.pdf"
 *     fileName="manual.pdf"
 *     arialLabel="Baixar manual"
 *     icon={<DownloadIcon />}
 *     width="200px"
 *     height="44px"
 *   >
 *     <Typography variant="button">Baixar</Typography>
 *   </DownloadButton>
 * );
 * ```
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({
  width = 'auto',
  height = 'fit-content',
  file,
  fileName,
  background,
  backgroundHover,
  color,
  colorHover,
  borderRadius,
  boxShadow,
  arialLabel,
  icon,
  children,
}) => {
  return (
    <StyledLink
      href={file}
      download={fileName}
      background={background}
      backgroundHover={backgroundHover}
      color={color}
      colorHover={colorHover}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      aria-label={arialLabel}
      width={width}
      height={height}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledLink>
  );
};

DownloadButton.displayName = 'DownloadButton';

export default DownloadButton;
