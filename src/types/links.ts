export type SpecialLink = {
  id: number;
  title: string;
  iconLinkType: 'local' | 'external' | 'link';
  icon: string;
  link: string;
  description: string;
}

export type SpecialCategory = {
  title: string;
  icon: string;
  subItems: SpecialLink[];
}
