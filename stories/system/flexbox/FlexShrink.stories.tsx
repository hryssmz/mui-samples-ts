// system/flexbox/FlexShrink.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FlexShrinkComponent from "../../../src/system/flexbox/FlexShrink";

export default {
  component: FlexShrinkComponent,
  title: "system/Flexbox/Flex Shrink",
} as ComponentMeta<typeof FlexShrinkComponent>;

export const FlexShrink: ComponentStory<typeof FlexShrinkComponent> = () => (
  <FlexShrinkComponent />
);
