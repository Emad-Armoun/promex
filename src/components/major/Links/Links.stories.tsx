import type { Meta, StoryObj } from "@storybook/react";
import { Links } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Major/Links",
  component: Links,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      {
        title: "Search Engines",
        icon: "",
        subItems: [
          {
            id: 1,
            title: "Google",
            iconLinkType: "link",
            icon: "",
            link: "https://www.google.com",
            description: "Google website",
          },
          {
            id: 1,
            title: "Yahoo",
            iconLinkType: "link",
            icon: "",
            link: "https://www.yahoo.com",
            description: "Yahoo website",
          },
          {
            id: 1,
            title: "Bing",
            iconLinkType: "link",
            icon: "",
            link: "https://www.bing.com",
            description: "Google website",
          },
        ],
      },
      {
        title: "Javascript Frameworks",
        icon: "",
        subItems: [
          {
            id: 1,
            title: "React",
            iconLinkType: "link",
            icon: "",
            link: "https://www.react.com",
            description: "React website",
          },
          {
            id: 1,
            title: "Vue",
            iconLinkType: "link",
            icon: "",
            link: "https://vuejs.org/",
            description: "Vue.js website",
          },
          {
            id: 1,
            title: "Next.JS",
            iconLinkType: "link",
            icon: "",
            link: "https://nextjs.org/",
            description: "Next JS website",
          },
          {
            id: 1,
            title: "Angular",
            iconLinkType: "link",
            icon: "",
            link: "https://angular.io/",
            description: "Angular website",
          },
        ],
      },
    ],
    showFavoriteBtn: true,
  },
};
