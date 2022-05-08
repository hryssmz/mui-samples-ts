// inputs/text-field/MultilineTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultilineTextFieldsComponent from "../../../src/inputs/text-field/MultilineTextFields";

export default {
  component: MultilineTextFieldsComponent,
  title: "inputs/Text Field/Multiline Text Fields",
} as ComponentMeta<typeof MultilineTextFieldsComponent>;

export const MultilineTextFields: ComponentStory<
  typeof MultilineTextFieldsComponent
> = () => <MultilineTextFieldsComponent />;
