// inputs/text-field/LayoutTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LayoutTextFieldsComponent from "../../../src/inputs/text-field/LayoutTextFields";

export default {
  component: LayoutTextFieldsComponent,
  title: "inputs/Text Field/Layout Text Fields",
} as ComponentMeta<typeof LayoutTextFieldsComponent>;

export const LayoutTextFields: ComponentStory<
  typeof LayoutTextFieldsComponent
> = () => <LayoutTextFieldsComponent />;
