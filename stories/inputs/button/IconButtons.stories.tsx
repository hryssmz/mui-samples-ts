// inputs/button/IconButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButtonsComponent from "../../../src/inputs/button/IconButtons";

export default {
  component: IconButtonsComponent,
  title: "inputs/Button/Icon Buttons",
} as ComponentMeta<typeof IconButtonsComponent>;

export const IconButtons: ComponentStory<typeof IconButtonsComponent> = () => (
  <IconButtonsComponent />
);
