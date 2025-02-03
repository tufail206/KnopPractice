import {styled,Box} from '@mui/material'

export const SidebarContainer=styled(Box)(({theme})=>({
    width: '235px',
    minHeight:"100vh",
   padding:theme.spacing(2),
overflow: "hidden",
    backgroundColor: theme.palette.sidebarBg,
   borderRadius:theme.shape.borderRadiusLarge,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
}))

export const NavLinkStyled = styled(Box)(({ theme }) => ({
  maxWidth: "232px",
  width: "232px",
  marginBottom: 10,
  borderRadius: theme.shape.borderRadiusMedium,
  color: theme.palette.text.tertiary,
  textDecoration: "none",
  marginLeft: "-30px",
  position: "relative",
overflow:"hidden",
  "&:hover": {
    backgroundColor: theme.palette.text.linkColor,
  },
  "&.active": {
    backgroundColor: theme.palette.text.linkColor,
    // Create the V-shape with ::after
    "&::after": {
      content:`""` ,
      position: "absolute",
      top: "50%",
      left: "0px", // Adjust the position of the V shape
      transform: "translateY(-50%) rotate(45deg)", // Rotate to form the V shape
      width: "30px", // Width of the V shape
      height: "30px", // Height of the V shape
      backgroundColor: theme.palette.text.tertiary, // Color of the V shape
    },
  },
}));