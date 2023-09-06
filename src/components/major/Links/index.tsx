import { useEffect, useState } from "react";
import { FAVORITE_ITEMS_KEY } from "../../../util/constants";
import { AllLinksDiv, RowDiv } from "./styled";
import LinkSquare from "../../minor/LinkSquare";
import { useSettings } from "../../../util/useSettings";
import { Props } from "./type";

export const Links: React.FC<Props> = ({ items, showFavoriteBtn = false }) => {
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);
  const settings = useSettings();

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

  const CategoryDynamicTitle = settings?.size === "big" ? "h2" : "h3";

  return (
    <AllLinksDiv>
      {items &&
        items.map((item, index: number) => (
          <div key={index}>
            <CategoryDynamicTitle>{item.title}</CategoryDynamicTitle>
            <RowDiv>
              {item.subItems.map((subItem, subIndex) => (
                <LinkSquare
                  key={subIndex}
                  item={subItem}
                  isInFavorite={favoriteItems.includes(subItem.id)}
                  toggleFavorite={toggleFavorite}
                  showFavoriteBtn={showFavoriteBtn}
                  size={settings?.size || "small"}
                />
              ))}
            </RowDiv>
          </div>
        ))}
    </AllLinksDiv>
  );
};
