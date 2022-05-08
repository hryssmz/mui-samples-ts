// inputs/button/ContainedButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContainedButtonsComponent from "../../../src/inputs/button/ContainedButtons";

export default {
  component: ContainedButtonsComponent,
  title: "inputs/Button/Contained Buttons",
} as ComponentMeta<typeof ContainedButtonsComponent>;

export const ContainedButtons: ComponentStory<
  typeof ContainedButtonsComponent
> = () => <ContainedButtonsComponent />;
