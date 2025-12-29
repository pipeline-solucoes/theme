'use client';

import React from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<{ background_color: string }>(({ background_color }) => ({
  backgroundColor: background_color,
  padding: '4px',
  borderRadius: '50%',
  display: 'inline-block',
  border: '2px solid transparent',
}));

/**
 * Propriedades do componente `WhatsAppIcon`.
 */
export interface WhatsAppIconProps {
  /**
   * Número de telefone para iniciar a conversa no WhatsApp.
   *
   * - Use **apenas dígitos**, incluindo o código do país.
   * - Exemplo (Brasil): `"5511999999999"` (55 = DDI, 11 = DDD).
   */
  whatsapp: string;
}

/**
 * Ícone clicável do WhatsApp envolto em um container circular personalizável,
 * que pode ser posicionado livremente em qualquer lugar da tela.
 * 
 * - Ao clicar, abre uma nova aba com o link `https://wa.me/{whatsapp}`.
 * - A cor de fundo do círculo é a cor oficial do WhatsApp (`#25D366`).
 * - Ideal para ser usado dentro de layouts onde você controla o `position` via CSS/Box pai.
 *
 * Exemplo de uso:
 * ```tsx
 * <WhatsAppIcon whatsapp="5511999999999" />
 * ```
 */
const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ whatsapp }) => {
  return (
    <StyledBox background_color="#25D366">
      <IconButton
        aria-label="icone whatsapp"
        onClick={() =>
          window.open(`https://wa.me/${whatsapp}`, '_blank', 'noopener noreferrer')
        }
      >
        <WhatsApp sx={{ color: 'white', fontSize: 24 }} />
      </IconButton>
    </StyledBox>
  );
};

export default WhatsAppIcon;

