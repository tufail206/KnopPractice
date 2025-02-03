import { styled, Typography } from "@mui/material";
import { StyledTypographyProps } from "./type";

export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ theme, fs, styleType, wsnp = false, fw, light, maxLines }) => ({
    fontSize: fs ? `${fs}rem` : "1rem",
    fontWeight: fw ? fw : 500,
    margin: 0,
    color:
      styleType === "default"
        ? theme.palette.text.primary
        : styleType === "inverted"
        ? theme.palette.text.secondary
        : styleType
        ? styleType
        : theme.palette.text.tertiary,
    ...(light && {
      opacity: 0.7,
    }),
    ...(wsnp && {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    ...(maxLines && {
      display: "-webkit-box",
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }),
  })
);
