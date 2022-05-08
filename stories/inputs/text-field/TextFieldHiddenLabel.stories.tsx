// inputs/text-field/TextFieldHiddenLabel.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextFieldHiddenLabelComponent from "../../../src/inputs/text-field/TextFieldHiddenLabel";

export default {
  component: TextFieldHiddenLabelComponent,
  title: "inputs/Text Field/Text Field Hidden Label",
} as ComponentMeta<typeof TextFieldHiddenLabelComponent>;

export const TextFieldHiddenLabel: ComponentStory<
  typeof TextFieldHiddenLabelComponent
> = () => <TextFieldHiddenLabelComponent />;
