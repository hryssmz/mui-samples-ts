// system/flexbox/DisplayFlex.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DisplayFlexComponent from "../../../src/system/flexbox/DisplayFlex";

export default {
  component: DisplayFlexComponent,
  title: "system/Flexbox/Display Flex",
} as ComponentMeta<typeof DisplayFlexComponent>;

export const DisplayFlex: ComponentStory<typeof DisplayFlexComponent> = () => (
  <DisplayFlexComponent />
);
