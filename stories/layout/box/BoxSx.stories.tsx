// layout/box/BoxSx.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoxSxComponent from "../../../src/layout/box/BoxSx";

export default {
  component: BoxSxComponent,
  title: "layout/Box/Box Sx",
} as ComponentMeta<typeof BoxSxComponent>;

export const BoxSx: ComponentStory<typeof BoxSxComponent> = () => (
  <BoxSxComponent />
);
