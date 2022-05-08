// inputs/button/BasicButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicButtonsComponent from "../../../src/inputs/button/BasicButtons";

export default {
  component: BasicButtonsComponent,
  title: "inputs/Button/Basic Buttons",
} as ComponentMeta<typeof BasicButtonsComponent>;

export const BasicButtons: ComponentStory<
  typeof BasicButtonsComponent
> = () => <BasicButtonsComponent />;
