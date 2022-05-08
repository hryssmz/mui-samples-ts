// inputs/text-field/BasicTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicTextFieldsComponent from "../../../src/inputs/text-field/BasicTextFields";

export default {
  component: BasicTextFieldsComponent,
  title: "inputs/Text Field/Basic Text Fields",
} as ComponentMeta<typeof BasicTextFieldsComponent>;

export const BasicTextFields: ComponentStory<
  typeof BasicTextFieldsComponent
> = () => <BasicTextFieldsComponent />;
