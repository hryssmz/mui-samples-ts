// inputs/text-field/FormPropsTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormPropsTextFieldsComponent from "../../../src/inputs/text-field/FormPropsTextFields";

export default {
  component: FormPropsTextFieldsComponent,
  title: "inputs/Text Field/Form Props Text Fields",
} as ComponentMeta<typeof FormPropsTextFieldsComponent>;

export const FormPropsTextFields: ComponentStory<
  typeof FormPropsTextFieldsComponent
> = () => <FormPropsTextFieldsComponent />;
