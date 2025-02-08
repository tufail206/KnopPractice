import { styled ,Box } from "@mui/material";

export const CardBox=styled(Box)(({theme})=>({
   
    borderRadius: theme.shape.borderRadius,
    width:"max-content",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    cursor: "pointer",
}))

