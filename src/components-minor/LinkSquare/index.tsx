import { SubItem } from "../../types/links";
import { SquareDiv } from "./styled";

type Props = {
  item: SubItem,
}

const LinkSquare: React.FC<Props> = ({ item }) => {
  return (
    <SquareDiv>
      <a href={item.link} target="_blank">
        <img src={item.icon} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </a>
    </SquareDiv>
  );
}

export default LinkSquare;
