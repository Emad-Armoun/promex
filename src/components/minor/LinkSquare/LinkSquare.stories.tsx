import type { Meta, StoryObj } from "@storybook/react";
import LinkSquare from ".";
import { SizeValues } from "../../../types/settings";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Minor/LinkSquare",
  component: LinkSquare,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "inline-radio",
      options: [SizeValues.small, SizeValues.big],
    },
  },
} satisfies Meta<typeof LinkSquare>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithFavorite: Story = {
  args: {
    item: {
      id: 1,
      title: "Miro",
      iconLinkType: "link",
      icon: "",
      link: "https://miro.com/app/dashboard/",
      description: "A whiteboard tool to draw diagrams",
    },
    isInFavorite: true,
    showFavoriteBtn: true,
    toggleFavorite: (itemId: number) => {
      alert(`save id=${itemId} in the database`);
    },
    size: SizeValues.big as SizeValues,
  },
};

export const WithoutFavorite: Story = {
  args: {
    item: {
      id: 1,
      title: "Miro",
      iconLinkType: "link",
      icon: "",
      link: "https://miro.com/app/dashboard/",
      description: "A whiteboard tool to draw diagrams",
    },
    isInFavorite: false,
    showFavoriteBtn: false,
    toggleFavorite: (itemId: number) => {
      alert(`save id=${itemId} in the database`);
    },
    size: SizeValues.big as SizeValues,
  },
};

export const SmallButton: Story = {
  args: {
    item: {
      id: 1,
      title: "Miro",
      iconLinkType: "link",
      icon: "",
      link: "https://miro.com/app/dashboard/",
      description: "A whiteboard tool to draw diagrams",
    },
    isInFavorite: false,
    showFavoriteBtn: false,
    toggleFavorite: (itemId: number) => {
      alert(`save id=${itemId} in the database`);
    },
    size: SizeValues.small as SizeValues,
  },
};
