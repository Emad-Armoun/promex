import { useEffect, useState } from "react";
import { SpecialCategory } from "../../types/links";
import { FAVORITE_ITEMS_KEY } from "../../util/constants";
import { AllLinksDiv, RowDiv } from "./styled";
import LinkSquare from "../../components-minor/LinkSquare";

type Props = {
  items: SpecialCategory[];
};

export const Links: React.FC<Props> = ({ items }) => {
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  useEffect(() => {
    const storedFavoriteItems = localStorage.getItem(FAVORITE_ITEMS_KEY);
    if (storedFavoriteItems) {
      setFavoriteItems(JSON.parse(storedFavoriteItems));
    }
  }, []);

  const toggleFavorite = (itemId: number) => {
    let newFavoriteItems: number[];
    if (favoriteItems.includes(itemId)) {
      newFavoriteItems = favoriteItems.filter((id) => id !== itemId);
    } else {
      newFavoriteItems = [...favoriteItems, itemId];
    }
    setFavoriteItems(newFavoriteItems);
    localStorage.setItem(FAVORITE_ITEMS_KEY, JSON.stringify(newFavoriteItems));
  };

  return (
    <AllLinksDiv>
      {items && items.map((item, index: number) => (
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
  )
};