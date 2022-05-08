// inputs/text-field/Inputs.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputsComponent from "../../../src/inputs/text-field/Inputs";

export default {
  component: InputsComponent,
  title: "inputs/Text Field/Inputs",
} as ComponentMeta<typeof InputsComponent>;

export const Inputs: ComponentStory<typeof InputsComponent> = () => (
  <InputsComponent />
);
