// inputs/text-field/ColorTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorTextFieldsComponent from "../../../src/inputs/text-field/ColorTextFields";

export default {
  component: ColorTextFieldsComponent,
  title: "inputs/Text Field/Color Text Fields",
} as ComponentMeta<typeof ColorTextFieldsComponent>;

export const ColorTextFields: ComponentStory<
  typeof ColorTextFieldsComponent
> = () => <ColorTextFieldsComponent />;
