import {styled,Box} from "@mui/material"

export const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
  justifyContent: "end",
  alignItems: "center",
  padding: theme.spacing(1),
  zIndex: theme.zIndex.appBar + 1,
  gap: "100px",
 " & .notification":{
fontSize:"2.2rem",
   
// Notification background color
 
 },
  "& .user": {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "gray", // User background color
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));


export const TopNavContainer=styled(Box)(({theme})=>({
    display:"flex",
    flex:1,
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    padding:theme.spacing(1),
    zIndex: theme.zIndex.appBar + 1,
    gap:"10px",
}))