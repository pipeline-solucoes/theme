'use client';

import React from 'react';
import { WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor: '#25D366',
  color: 'white',

  '&:hover': {
    backgroundColor: '#1EBE5D',
  },
});

/**
 * Propriedades do componente `WhatsAppButton`.
 */
interface WhatsAppButtonProps {
  /**
   * Número de telefone para iniciar a conversa no WhatsApp.
   *
   * - Deve ser informado **apenas com dígitos**, incluindo o código do país.
   * - Exemplo para Brasil: `"5511999999999"` (55 = DDI, 11 = DDD).
   */
  whatsapp: string;
}

/**
 * Botão flutuante do WhatsApp que abre uma conversa no **WhatsApp** em uma nova aba,
 * usando o número fornecido na propriedade `whatsapp`.
 * 
 * - Fica posicionado no canto inferior direito da tela.
 * - Estilizado com a cor oficial do WhatsApp (#25D366).
 * - Ao clicar, redireciona para `https://wa.me/{whatsapp}`
 *
 * Exemplo de uso:
 * ```tsx
 * <WhatsAppButton whatsapp="5511999999999" />
 * ```
 */
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsapp }) => {
  /**
   * Abre uma nova aba com o link oficial `wa.me/{whatsapp}` para iniciar a conversa.
   */
  const handleClick = () => {
    window.open(`https://wa.me/${whatsapp}`, '_blank');
  };

  return (
    <StyledFab aria-label="button whatsapp" onClick={handleClick}>
      <WhatsApp />
    </StyledFab>
  );
};

export default WhatsAppButton;

