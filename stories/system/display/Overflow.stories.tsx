// system/display/Overflow.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OverflowComponent from "../../../src/system/display/Overflow";

export default {
  component: OverflowComponent,
  title: "system/Display/Overflow",
} as ComponentMeta<typeof OverflowComponent>;

export const Overflow: ComponentStory<typeof OverflowComponent> = () => (
  <OverflowComponent />
);
