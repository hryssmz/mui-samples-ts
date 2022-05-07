// components/dashboard/Title.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TitleComponent from "../../../src/components/dashboard/Title";

export default {
  component: TitleComponent,
  title: "components/Dashboard/Title",
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = args => (
  <TitleComponent {...args} />
);

export const Title = Template.bind({});
Title.args = {
  children: "Sample Title",
};
