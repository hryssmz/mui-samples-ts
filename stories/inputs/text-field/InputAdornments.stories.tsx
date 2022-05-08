// inputs/text-field/InputAdornments.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputAdornmentsComponent from "../../../src/inputs/text-field/InputAdornments";

export default {
  component: InputAdornmentsComponent,
  title: "inputs/Text Field/Input Adornments",
} as ComponentMeta<typeof InputAdornmentsComponent>;

export const InputAdornments: ComponentStory<
  typeof InputAdornmentsComponent
> = () => <InputAdornmentsComponent />;
