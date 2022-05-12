// system/flexbox/FlexGrow.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FlexGrowComponent from "../../../src/system/flexbox/FlexGrow";

export default {
  component: FlexGrowComponent,
  title: "system/Flexbox/Flex Grow",
} as ComponentMeta<typeof FlexGrowComponent>;

export const FlexGrow: ComponentStory<typeof FlexGrowComponent> = () => (
  <FlexGrowComponent />
);
