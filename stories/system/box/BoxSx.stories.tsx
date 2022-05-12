// system/box/BoxSx.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoxSxComponent from "../../../src/system/box/BoxSx";

export default {
  component: BoxSxComponent,
  title: "system/Box/Box Sx",
} as ComponentMeta<typeof BoxSxComponent>;

export const BoxSx: ComponentStory<typeof BoxSxComponent> = () => (
  <BoxSxComponent />
);
