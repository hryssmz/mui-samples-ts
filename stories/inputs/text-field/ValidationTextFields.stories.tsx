// inputs/text-field/ValidationTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ValidationTextFieldsComponent from "../../../src/inputs/text-field/ValidationTextFields";

export default {
  component: ValidationTextFieldsComponent,
  title: "inputs/Text Field/Validation Text Fields",
} as ComponentMeta<typeof ValidationTextFieldsComponent>;

export const ValidationTextFields: ComponentStory<
  typeof ValidationTextFieldsComponent
> = () => <ValidationTextFieldsComponent />;
