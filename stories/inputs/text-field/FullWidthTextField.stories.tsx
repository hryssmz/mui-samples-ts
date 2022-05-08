// inputs/text-field/FullWidthTextField.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullWidthTextFieldComponent from "../../../src/inputs/text-field/FullWidthTextField";

export default {
  component: FullWidthTextFieldComponent,
  title: "inputs/Text Field/Full Width Text Field",
} as ComponentMeta<typeof FullWidthTextFieldComponent>;

export const FullWidthTextField: ComponentStory<
  typeof FullWidthTextFieldComponent
> = () => <FullWidthTextFieldComponent />;
