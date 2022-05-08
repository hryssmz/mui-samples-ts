// inputs/text-field/StateTextFields.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StateTextFieldsComponent from "../../../src/inputs/text-field/StateTextFields";

export default {
  component: StateTextFieldsComponent,
  title: "inputs/Text Field/State Text Fields",
} as ComponentMeta<typeof StateTextFieldsComponent>;

export const StateTextFields: ComponentStory<
  typeof StateTextFieldsComponent
> = () => <StateTextFieldsComponent />;
