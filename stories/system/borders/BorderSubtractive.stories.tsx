// system/borders/BorderSubtractive.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BorderSubtractiveComponent from "../../../src/system/borders/BorderSubtractive";

export default {
  component: BorderSubtractiveComponent,
  title: "system/Borders/Border Subtractive",
} as ComponentMeta<typeof BorderSubtractiveComponent>;

export const BorderSubtractive: ComponentStory<
  typeof BorderSubtractiveComponent
> = () => <BorderSubtractiveComponent />;
