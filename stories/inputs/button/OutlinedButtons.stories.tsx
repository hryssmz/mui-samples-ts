// inputs/button/OutlinedButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutlinedButtonsComponent from "../../../src/inputs/button/OutlinedButtons";

export default {
  component: OutlinedButtonsComponent,
  title: "inputs/Button/Outlined Buttons",
} as ComponentMeta<typeof OutlinedButtonsComponent>;

export const OutlinedButtons: ComponentStory<
  typeof OutlinedButtonsComponent
> = () => <OutlinedButtonsComponent />;
