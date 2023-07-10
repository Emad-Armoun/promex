import { useEffect, useState } from "react";
import { Links } from "../../components-major/Links";
import { ContainerDiv } from "./styled"
import { FAVORITE_ITEMS_KEY } from "../../util/constants";
import { SpecialCategory, SpecialLink } from "../../types/links";
import data from '../../data/links.json';
import { Wave } from "../../components-minor/Wave";

export const HomePage: React.FC = () => {
  const [favoriteItems, setFavoriteItems] = useState<SpecialCategory[]>([]);

  useEffect(() => {
    const storedFavoriteItemIds = localStorage.getItem(FAVORITE_ITEMS_KEY);
    if (storedFavoriteItemIds) {
      const favoriteItemIds = JSON.parse(storedFavoriteItemIds);

      const filteredData: SpecialCategory[] = [];
      for (const category of data.items) {
        const filteredCategoryItems: SpecialLink[] = category.subItems.filter(item => favoriteItemIds.includes(item.id));
        if (filteredCategoryItems.length > 0) {
          filteredData.push({
            title: category.title,
            icon: category.icon,
            subItems: filteredCategoryItems
          });
        }
      }
      setFavoriteItems(filteredData);
    }
  }, []);

  return (
    <>
      <ContainerDiv>
        <h1>Home Page</h1>
        <Links items={favoriteItems} />
      </ContainerDiv>
      <Wave />
    </>
  );
};
