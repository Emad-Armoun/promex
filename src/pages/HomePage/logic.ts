import { SpecialCategory, SpecialLink } from "../../types/links";
import { Settings } from "../../types/settings";
import data from '../../data/links.json';

export const extractFavoritedLinks = (favoritedLinkIds: number[], settings?: Settings): SpecialCategory[] => {
  const finalData: SpecialCategory[] = [];
  for (const category of data.items) {
    const filteredLinksInCategory: SpecialLink[] = category.subItems.filter(
      item => favoritedLinkIds.includes(item.id)
    ) as SpecialLink[];

    if (filteredLinksInCategory.length === 0) continue;

    if(settings?.dontShowCats) {
      if(finalData.length === 0) {
        finalData.push({
          title: 'All Categories',
          icon: '',
          subItems: [],
        });
      }
      finalData[0].subItems.push(...filteredLinksInCategory);
    } else {
      finalData.push({
        title: category.title,
        icon: category.icon,
        subItems: filteredLinksInCategory
      });
    }
  }
  return finalData;
}
