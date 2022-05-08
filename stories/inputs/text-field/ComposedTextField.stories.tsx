// inputs/text-field/ComposedTextField.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ComposedTextFieldComponent from "../../../src/inputs/text-field/ComposedTextField";

export default {
  component: ComposedTextFieldComponent,
  title: "inputs/Text Field/Composed Text Field",
} as ComponentMeta<typeof ComposedTextFieldComponent>;

export const ComposedTextField: ComponentStory<
  typeof ComposedTextFieldComponent
> = () => <ComposedTextFieldComponent />;
