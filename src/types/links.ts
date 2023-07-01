export type SubItem = {
  title: string;
  icon: string;
  link: string;
  description: string;
}

export type Item = {
  title: string;
  icon: string;
  subItems: SubItem[];
}
