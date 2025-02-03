import { createTheme } from "@mui/material";

export const appTheme=createTheme({
    palette: {
         mainBg:"#61A0FD",
         sidebarBg: "#61A0FD",

         border:{
            primary:"#61A0FD"
         },
         button:{
            primary:"#61A0FD",
         },
         background:{
              default:"#61A0FD"
             
         },
         text:{
            main:"#252B5C",
            secondary:"#53587A",
            tertiary:"#fff",
            shade1:"#000000",
            linkColor:"rgba(235, 230, 230, 0.28)"
         },
         
    },
    typography: {
        fontFamily: 'Poppins',
    },
    
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 8,
        borderRadiusSmall:15,
        borderRadiusMedium:20,
        borderRadiusLarge:32,
        borderRadiusRound:50,
    },
    colorScheme:{
              primary:"#EDFFEF",
             secondary:"#55A55E",
             tertiary:"#FF7A59",
            quaternary:"#F7F7F7",
    }
})