import { useEffect, useState } from "react";
import { Links } from "../../components-major/Links";
import { Wave } from "../../components-minor/Wave";
import { FAVORITE_ITEMS_KEY } from "../../util/constants";
import { SpecialCategory } from "../../types/links";
import { ContainerDiv, TitleDiv } from "./styled"
import { extractFavoritedLinks } from "./logic";
import { useSettings } from "../../util/useSettings";

export const HomePage: React.FC = () => {
  const [favoriteItems, setFavoriteItems] = useState<SpecialCategory[]>([]);
  const settings = useSettings();  

  useEffect(() => {
    const storedFavoriteItemIds = localStorage.getItem(FAVORITE_ITEMS_KEY);
    if (storedFavoriteItemIds) {
      const favoritedLinkIds = JSON.parse(storedFavoriteItemIds);
      const favoritedLinkObjs = extractFavoritedLinks(favoritedLinkIds, settings);
      setFavoriteItems(favoritedLinkObjs);
    }
  }, [settings]);

  return (
    <>
      <ContainerDiv>
        <TitleDiv>Welcome to PromEx 😊</TitleDiv>
        <Links items={favoriteItems} />
      </ContainerDiv>
      <Wave />
    </>
  );
};
