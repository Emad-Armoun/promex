import { useEffect, useState } from "react";
import { ContainerDiv, PageTitleH1, AllLinksDiv, RowDiv } from "./styled";
import { Item } from "../../types/links";
import data from '../../data/links.json';
import LinkSquare from "../../components-minor/LinkSquare";
import { Wave } from "../../components-minor/Wave";
import { FAVORITE_ITEMS_KEY } from "../../util/constants";

const LinksPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(data.items as Item[]);
    const storedFavoriteItems = localStorage.getItem(FAVORITE_ITEMS_KEY);
    if (storedFavoriteItems) {
      setFavoriteItems(JSON.parse(storedFavoriteItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITE_ITEMS_KEY, JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const toggleFavorite = (itemId: number) => {
    if (favoriteItems.includes(itemId)) {
      setFavoriteItems(favoriteItems.filter((id) => id !== itemId));
    } else {
      setFavoriteItems([...favoriteItems, itemId]);
    }
  };

  return (
    <ContainerDiv>
      <PageTitleH1>Important Links</PageTitleH1>
      <AllLinksDiv>
        {items.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <RowDiv>
              {item.subItems.map((subItem, subIndex) => (
                <LinkSquare key={subIndex} item={subItem} isInFavorite={favoriteItems.includes(subItem.id)} toggleFavorite={toggleFavorite} />
              ))}
            </RowDiv>
          </div>
        ))}
      </AllLinksDiv>
      <Wave />
    </ContainerDiv>
  )
};

export default LinksPage;