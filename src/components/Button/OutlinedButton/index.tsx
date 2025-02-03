import { ButtonProps, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';
import { OutlinedButtonStyled } from '../styled/StyledOutlinedButton'; // Import the styled outlined button

interface UIButtonProps extends ButtonProps {
  label?: string;
  variant?: 'contained' | 'outlined';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  fs?: number; // Font size prop
  styleType?: 'default' | 'inverted'; // Custom style type (for example, to control button colors)
  isLoading?: boolean;
}

const UIOutlinedButton = ({
  label,
  variant = 'outlined', // Default variant is 'outlined'
  iconPosition,
  isLoading,
  fs,
  styleType,
  icon,
  ...props
}: UIButtonProps) => {
  return (
    <OutlinedButtonStyled variant={variant} styleType={styleType} fs={fs} {...props}>
      {isLoading ? (
        <CircularProgress size={24} color="inherit" />
      ) : icon && iconPosition === 'start' ? (
        icon
      ) : (
        label
      )}
    </OutlinedButtonStyled>
  );
};

export default UIOutlinedButton;
