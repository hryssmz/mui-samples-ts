// system/display/Block.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlockComponent from "../../../src/system/display/Block";

export default {
  component: BlockComponent,
  title: "system/Display/Block",
} as ComponentMeta<typeof BlockComponent>;

export const Block: ComponentStory<typeof BlockComponent> = () => (
  <BlockComponent />
);
