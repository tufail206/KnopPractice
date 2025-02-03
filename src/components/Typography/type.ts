import { TypographyProps } from "@mui/material";

export interface StyledTypographyProps extends TypographyProps {
  styleType?: "default" | "inverted" | string;
  fs?: number;
  wsnp?: boolean;
  fw?: number;
  light?: boolean;
  maxLines?: number;
  
}
