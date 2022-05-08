// inputs/text-field/InputWithIcon.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputWithIconComponent from "../../../src/inputs/text-field/InputWithIcon";

export default {
  component: InputWithIconComponent,
  title: "inputs/Text Field/Input With Icon",
} as ComponentMeta<typeof InputWithIconComponent>;

export const InputWithIcon: ComponentStory<
  typeof InputWithIconComponent
> = () => <InputWithIconComponent />;
