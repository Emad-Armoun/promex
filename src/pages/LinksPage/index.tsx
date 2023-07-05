import { useEffect, useState } from "react";
import { ContainerDiv, PageTitleH1, RowDiv } from "./styled";
import { Item } from "../../types/links";
import data from '../../data/links.json';
import LinkSquare from "../../components-minor/LinkSquare";

const LinksPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(data.items as Item[]);
  }, []);

  return (
    <ContainerDiv>
      <PageTitleH1>Important Links</PageTitleH1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <RowDiv>
              {item.subItems.map((subItem, subIndex) => (
                <LinkSquare key={subIndex} item={subItem} />
              ))}
            </RowDiv>
          </div>
        ))}
      </div>
    </ContainerDiv>
  )
};

export default LinksPage;