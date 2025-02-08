
import HouseIcon from "@mui/icons-material/House";
import { VerifiedUserTwoTone } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
export interface CardProps {
  id: number;
  Icons: OverridableComponent<SvgIconTypeMap<{}, "svg">>; // Correctly close the type
  title: string;
  total: number;
  
}

const CardData: CardProps[] = [
  { id: 1, Icons: HouseIcon, title: "Total Visits", total: 3000 },
  {
    id: 2,
    Icons: VerifiedUserTwoTone,
    title: "TotalTenant",
    total: 2685,
  },
  {
    id: 3,
    Icons: MapsHomeWorkIcon,
    title: "Total Properties",
    total: 2467,
  },
  {
    id: 4,
    Icons: MapsHomeWorkIcon,
    title: "Offer Made",
    total: 2467,
  },
  {
    id: 5,
    Icons: MapsHomeWorkIcon,
    title: "Total Maintenance Req.",
    total: 2467,
  },
  {
    id: 6,
    Icons: MapsHomeWorkIcon,
    title: "Completed Deals",
    total: 2467,
  },
];

export default CardData;
