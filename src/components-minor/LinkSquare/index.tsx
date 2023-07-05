import { useState } from "react";
import { SubItem } from "../../types/links";
import { SquareDiv } from "./styled";

type Props = {
  item: SubItem,
}

const LinkSquare: React.FC<Props> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SquareDiv
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isHovered ? 'over' : 'out'}
    >
      <a href={item.link} target="_blank">
        <img src={item.icon} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </a>
    </SquareDiv>
  );
}

export default LinkSquare;
