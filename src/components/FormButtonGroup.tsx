import React from 'react';
import { styled, TypographyVariant } from '@mui/material/styles';
import { StyledButtonKind } from './StyledButton';
import { Typography } from '@mui/material';

export interface FormButtonGroupProps {  
  showDeleteButton?: boolean;
  variant?: TypographyVariant;
  onCancel?: () => void;
  onDelete?: () => void;
}

const ActionsContainerWithDelete = styled('div', {
  shouldForwardProp: (prop) => !(['onCancel'] as string[]).includes(prop as string),
})<Pick<FormButtonGroupProps, 'onCancel'>>(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  gap: '16px',
  justifyItems: 'flex-start',
  width: '100%',
}));

const ActionsContainer = styled('div', {
  shouldForwardProp: (prop) => !(['onCancel'] as string[]).includes(prop as string),
})<Pick<FormButtonGroupProps, 'onCancel'>>(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'flex-end',
  width: '100%',
}));

/**
 * Agrupador de botões "Deletar", Cancelar" e "Salvar" para uso **dentro** de formulários.
 *
 * O botão **"Salvar"** possui `type="submit"` e dispara o `onSubmit` do `<form>`.
 *
 * @param {TypographyVariant} [variant="body1"] Variante da tipografia usada no texto.
 * @param {boolean} [showDeleteButton="false"] Exibir botao Deletar.
 * @param {() => void} [onCancel]
 * Função disparada ao clicar em **"Cancelar"**.
 * Ideal para fechar modal, navegar de volta, limpar estado ou desfazer alterações.
 *
 * @default onCancel = () => {}
 * 
 * @param {() => void} [onDelete]
 * Função disparada ao clicar em **"Deletar"**.
 *
 * @default onDelete = () => {}
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import Box from '@mui/material/Box';
 * import TextField from '@mui/material/TextField';
 * import { FormButtonGroup } from './FormButtonGroup';
 *
 * const MyForm: React.FC = () => {
 *   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 *     event.preventDefault();
 *     // sua lógica de envio...
 *     console.log('Form submetido');
 *   };
 *
 *   return (
 *     <Box component="form" onSubmit={handleSubmit} noValidate>
 *       <TextField label="Nome" fullWidth margin="normal" />
 *       <FormButtonGroup
 *         exibirBotaoDelete = {true} 
 *         onCancel={() => console.log('cancelado')}
 *         onDelete={() => console.log('deletado')}
 *       />
 *     </Box>
 *   );
 * };
 * ```
 */
const FormButtonGroup: React.FC<FormButtonGroupProps> = ({
  showDeleteButton = false,
  variant = "body1",
  onCancel = () => {},
  onDelete = () => {},
}) => {

  if (showDeleteButton){

    return (
      <ActionsContainerWithDelete onCancel={onCancel}>            
        
        <StyledButtonKind
          kind="delete"
          type="button"
          onClick={onDelete}
          aria-label="botao Deletar"
          sx={{ width: 'auto' }}          
        >
          <Typography variant={variant}>Deletar</Typography>
        </StyledButtonKind>
            
        <StyledButtonKind
          kind="secondary"
          type="button"
          onClick={onCancel}
          aria-label="botao Cancelar"
          sx={{ width: 'auto' }}
        >
          <Typography variant={variant}>Cancelar</Typography>
        </StyledButtonKind>

        <StyledButtonKind
          kind="primary"
          type="submit"
          aria-label="botao Salvar"
          sx={{ width: 'auto' }}
        >
          <Typography variant={variant}>Salvar</Typography>
        </StyledButtonKind>

      </ActionsContainerWithDelete>
    );
  }

  else{

    return (
      <ActionsContainer onCancel={onCancel}>              
        <StyledButtonKind
          kind="secondary"
          type="button"
          aria-label="botao Cancelar"
          onClick={onCancel}
          sx={{ width: 'auto' }}
        >
          <Typography variant={variant}>Cancelar</Typography>
        </StyledButtonKind>

        <StyledButtonKind
          kind="primary"
          type="submit"
          aria-label="botao Salvar"
          sx={{ width: 'auto' }}
        >
          <Typography variant={variant}>Salvar</Typography>
        </StyledButtonKind>
      </ActionsContainer>
    );
  }  
};

FormButtonGroup.displayName = 'FormButtonGroup';
export default FormButtonGroup;

