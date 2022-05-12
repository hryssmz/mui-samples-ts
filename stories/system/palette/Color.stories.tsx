// system/palette/Color.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorComponent from "../../../src/system/palette/Color";

export default {
  component: ColorComponent,
  title: "system/Palette/Color",
} as ComponentMeta<typeof ColorComponent>;

export const Color: ComponentStory<typeof ColorComponent> = () => (
  <ColorComponent />
);
