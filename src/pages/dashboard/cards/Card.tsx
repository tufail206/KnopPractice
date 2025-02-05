
import { CardBox } from "./styled"
import { CardProps } from "./data";

const Card: React.FC<CardProps> = ({ Icons, title, total }) => {
  return (
    <CardBox>
      <Icons/>
      <h3>{title}</h3>
      <p>{total}</p>
    </CardBox>
  );
};

export default Card