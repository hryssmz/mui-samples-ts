// inputs/text-field/TextFieldSizes.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextFieldSizesComponent from "../../../src/inputs/text-field/TextFieldSizes";

export default {
  component: TextFieldSizesComponent,
  title: "inputs/Text Field/Text Field Sizes",
} as ComponentMeta<typeof TextFieldSizesComponent>;

export const TextFieldSizes: ComponentStory<
  typeof TextFieldSizesComponent
> = () => <TextFieldSizesComponent />;
