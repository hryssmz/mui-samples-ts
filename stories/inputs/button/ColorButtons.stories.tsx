// inputs/button/ColorButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorButtonsComponent from "../../../src/inputs/button/ColorButtons";

export default {
  component: ColorButtonsComponent,
  title: "inputs/Button/Color Buttons",
} as ComponentMeta<typeof ColorButtonsComponent>;

export const ColorButtons: ComponentStory<
  typeof ColorButtonsComponent
> = () => <ColorButtonsComponent />;
