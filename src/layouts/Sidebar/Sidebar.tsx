import { Box,Link,List,ListItem, ListItemButton, ListItemText } from "@mui/material"
import { NavLinkStyled, SidebarContainer } from "./styled"
import logo from '../../assets/images/logo/logo.png'
import { StyledTypography } from "../../components/Typography"
import { NavLink } from "react-router-dom"
import { menuItems } from "./MenuItems"
import { useEffect, useState } from "react"
const Sidebar = () => {
  const [activeMenu,setActiveMenu] =useState<Number>(0)
   useEffect(() => {
     const storedActiveMenu = localStorage.getItem("activeMenu");
     if (storedActiveMenu) {
       setActiveMenu(Number(storedActiveMenu));
     }
   }, []);
    const handleMenuClick = (id: number) => {
      setActiveMenu(id);
      localStorage.setItem("activeMenu", id.toString()); // Save the active menu ID to localStorage
    };
  return (
    <SidebarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          margin: "20px 0",
        }}
      >
        <img src={logo} alt="logo" />{" "}
        <StyledTypography fs={1.2} fw={800} letterSpacing={2}>
          KnobExpress
        </StyledTypography>
      </Box>
      {/*  sidebar menu items here */}
      <List>
        {menuItems.map((menuItem) => (
          <NavLink to={menuItem.link}>
            <NavLinkStyled
              onClick={() => handleMenuClick(menuItem.id)}
              className={activeMenu === menuItem.id ? "active" : ""}
            >
              <ListItemButton
                onClick={() => setActiveMenu(menuItem.id)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </NavLinkStyled>
          </NavLink>
        ))}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar