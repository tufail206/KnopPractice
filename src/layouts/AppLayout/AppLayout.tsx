import { Outlet } from "react-router-dom"
import { LayoutContainer, LayoutWrapper } from "./styled"
import { Box } from "@mui/material"
import { Sidebar } from "../Sidebar"

const AppLayout = () => {
  return (
    <LayoutContainer>
      <LayoutWrapper>
       <Sidebar/>
       <Box sx={{display:"flex" ,gap:"10px", alignItems:"center",flexDirection:"column"}}>
         <h1>header</h1>
            <Outlet/>
            <h1>footer</h1>
      </Box>
      </LayoutWrapper>     
     
    </LayoutContainer>
  )
}

export default AppLayout