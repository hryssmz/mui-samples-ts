// inputs/button/CustomizedButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomizedButtonsComponent from "../../../src/inputs/button/CustomizedButtons";

export default {
  component: CustomizedButtonsComponent,
  title: "inputs/Button/Customized Buttons",
} as ComponentMeta<typeof CustomizedButtonsComponent>;

export const CustomizedButtons: ComponentStory<
  typeof CustomizedButtonsComponent
> = () => <CustomizedButtonsComponent />;
