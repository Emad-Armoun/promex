export type SubItem = {
  title: string;
  iconLinkType: 'local' | 'external' | 'link';
  icon: string;
  link: string;
  description: string;
}

export type Item = {
  title: string;
  icon: string;
  subItems: SubItem[];
}
