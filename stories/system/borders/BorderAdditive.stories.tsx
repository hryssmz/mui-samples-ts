// system/borders/BorderAdditive.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BorderAdditiveComponent from "../../../src/system/borders/BorderAdditive";

export default {
  component: BorderAdditiveComponent,
  title: "system/Borders/Border Additive",
} as ComponentMeta<typeof BorderAdditiveComponent>;

export const BorderAdditive: ComponentStory<
  typeof BorderAdditiveComponent
> = () => <BorderAdditiveComponent />;
