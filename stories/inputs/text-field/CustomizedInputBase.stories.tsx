// inputs/text-field/CustomizedInputBase.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomizedInputBaseComponent from "../../../src/inputs/text-field/CustomizedInputBase";

export default {
  component: CustomizedInputBaseComponent,
  title: "inputs/Text Field/Customized Input Base",
} as ComponentMeta<typeof CustomizedInputBaseComponent>;

export const CustomizedInputBase: ComponentStory<
  typeof CustomizedInputBaseComponent
> = () => <CustomizedInputBaseComponent />;
