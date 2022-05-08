// inputs/text-field/SelectTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectTextFieldsComponent from "../../../src/inputs/text-field/SelectTextFields";

export default {
  component: SelectTextFieldsComponent,
  title: "inputs/Text Field/Select Text Fields",
} as ComponentMeta<typeof SelectTextFieldsComponent>;

export const SelectTextFields: ComponentStory<
  typeof SelectTextFieldsComponent
> = () => <SelectTextFieldsComponent />;
