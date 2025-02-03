import { ButtonProps, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';
import { ContainedButtonStyled } from '../styled/StyledContainedButton';

interface UIButtonProps extends ButtonProps {
  label?: string;
  variant?: 'contained' | 'outlined';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  fs?: number;
  styleType?: 'default' | 'inverted';
  isLoading?: boolean;
}

const UIContainedButton = ({
  label,
  variant,
  iconPosition,
  isLoading,
  fs,
  styleType,
  icon,
  ...props
}: UIButtonProps) => {
  return (
    <ContainedButtonStyled variant={variant} styleType={styleType} {...props}>
      {isLoading ? (
        <CircularProgress size={24} color="inherit" />
      ) : icon && iconPosition === 'start' ? (
        icon
      ) : (
        label
      )}
    </ContainedButtonStyled>
  );
};

export default UIContainedButton;
