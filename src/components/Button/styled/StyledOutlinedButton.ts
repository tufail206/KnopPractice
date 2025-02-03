import { Button, styled } from "@mui/material";

// Styled button for outlined variant
export const OutlinedButtonStyled = styled(Button)<{
  fs?: number;
  styleType?: "default" | "inverted";
}>`
  border: 2px solid #3f51b5;
  background-color: transparent;
  color: #3f51b5;
  font-weight: 500;
  font-size: ${({ fs }) => (fs ? `${fs}px` : "14px")}; 
  // Dynamic styling based on styleType
  ${({ styleType }) =>
    styleType === "inverted" &&
    `
      border-color: #ffffff;
      color: #ffffff;
      &:hover {
        background-color: #303f9f;
        border-color: #ffffff;
        color: #303f9f;
      }
    `}

  &:hover {
    background-color: #f0f0f0;
    border-color: #303f9f;
    color: #303f9f;
  }

  &:disabled {
    border-color: #d3d3d3;
    color: #d3d3d3;
    background-color: transparent;
  }
`;
