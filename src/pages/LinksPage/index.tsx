import { useEffect, useState } from "react";
import { ContainerDiv, PageTitleH1 } from "./styled";
import { SpecialCategory } from "../../types/links";
import data from '../../data/links.json';
import { Links } from "../../components/major/Links";

export const LinksPage: React.FC = () => {
  const [items, setItems] = useState<SpecialCategory[]>([]);

  useEffect(() => {
    setItems(data.items as SpecialCategory[]);
  }, []);

  return (
    <ContainerDiv>
      <PageTitleH1>Important Links</PageTitleH1>
      <Links items={items} showFavoriteBtn={true} />
    </ContainerDiv>
  )
};
