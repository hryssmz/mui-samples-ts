// components/Copyright.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CopyrightComponent from "../../src/components/Copyright";

export default {
  component: CopyrightComponent,
  title: "components/Copyright",
} as ComponentMeta<typeof CopyrightComponent>;

const Template: ComponentStory<typeof CopyrightComponent> = args => (
  <CopyrightComponent {...args} />
);

export const Copyright = Template.bind({});
