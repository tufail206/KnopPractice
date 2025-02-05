import React from "react";
import { Typography ,Box} from "@mui/material";
import { TopNavContainer, UserContainer } from "./styled";
import NotificationsIcon from '@mui/icons-material/Notifications';
export type titleType = {
  title: string;
};

export const TopNav: React.FC<titleType> = ({ title }) => {
  return (
    <>
      <UserContainer>
        <NotificationsIcon className="notification" />
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div className="user">
            <img src="https://via.placeholder.com/50" alt="User" />
          </div>
          <span>Cody Fisher</span>
        </div>
      </UserContainer>
      <TopNavContainer>
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <p>
          Open house visits <span>6,867</span>
        </p>
      </TopNavContainer>
    </>
  );
};

export default TopNav;
