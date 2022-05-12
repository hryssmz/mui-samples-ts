// system/flexbox/FlexWrap.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FlexWrapComponent from "../../../src/system/flexbox/FlexWrap";

export default {
  component: FlexWrapComponent,
  title: "system/Flexbox/Flex Wrap",
} as ComponentMeta<typeof FlexWrapComponent>;

export const FlexWrap: ComponentStory<typeof FlexWrapComponent> = () => (
  <FlexWrapComponent />
);
