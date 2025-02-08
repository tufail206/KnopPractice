import { Box } from "@mui/material";
import TopNav from "../../components/TopNav/TopNav"
import Card from "./cards/Card"
import CardData from "./cards/data";


const Dashboard = () => {
  return (
    <div>
      <TopNav title="DASHBOARD" />
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        {CardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
    </div>
  );
}

export default Dashboard