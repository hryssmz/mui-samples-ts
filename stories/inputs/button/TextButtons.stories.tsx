// inputs/button/TextButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextButtonsComponent from "../../../src/inputs/button/TextButtons";

export default {
  component: TextButtonsComponent,
  title: "inputs/Button/Text Buttons",
} as ComponentMeta<typeof TextButtonsComponent>;

export const TextButtons: ComponentStory<typeof TextButtonsComponent> = () => (
  <TextButtonsComponent />
);
