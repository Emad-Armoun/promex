export const SizeValues = {
  small: "small",
  big: "big",
};
export type SizeValues = keyof typeof SizeValues;

export type Settings = {
  dontShowCats: boolean;
  size: SizeValues;
};
