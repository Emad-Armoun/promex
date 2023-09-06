import { SpecialLink } from "../../../types/links";
import { SizeValues } from "../../../types/settings";

export type Props = {
  item: SpecialLink;
  isInFavorite: boolean;
  toggleFavorite: (itemId: number) => void;
  showFavoriteBtn: boolean;
  size: SizeValues;
};
