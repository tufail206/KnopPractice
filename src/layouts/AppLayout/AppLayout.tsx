import { Outlet } from "react-router-dom"
import { LayoutContainer, LayoutWrapper } from "./styled"
import { Box } from "@mui/material"
import { Sidebar } from "../Sidebar"

const AppLayout = () => {
  return (
    <LayoutContainer>
      <LayoutWrapper>
        <Sidebar />
        <Box
          sx={{
            width:"100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <main style={{width:"100%"}}>
            <Outlet />
          </main>
          <h1>footer</h1>
        </Box>
      </LayoutWrapper>
    </LayoutContainer>
  );
}

export default AppLayout