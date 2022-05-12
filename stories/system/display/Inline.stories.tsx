// system/display/Inline.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InlineComponent from "../../../src/system/display/Inline";

export default {
  component: InlineComponent,
  title: "system/Display/Inline",
} as ComponentMeta<typeof InlineComponent>;

export const Inline: ComponentStory<typeof InlineComponent> = () => (
  <InlineComponent />
);
