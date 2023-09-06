import type { Meta, StoryObj } from "@storybook/react";
import LoadingComponent from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Minor/LoadingComponent",
  component: LoadingComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    speed: { control: { type: "number", min: 10, max: 2000, step: 10 } },
  },
} satisfies Meta<typeof LoadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Wider: Story = {
  args: {
    loadingText: "L o a d i n g . . . . .",
    speed: 50,
  },
};

export const Longer: Story = {
  args: {
    loadingText: "Please wait more, Thank you for you patience!    ",
    speed: 100,
  },
};
