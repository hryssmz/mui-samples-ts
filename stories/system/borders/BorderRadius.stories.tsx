// system/borders/BorderRadius.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BorderRadiusComponent from "../../../src/system/borders/BorderRadius";

export default {
  component: BorderRadiusComponent,
  title: "system/Borders/Border Radius",
} as ComponentMeta<typeof BorderRadiusComponent>;

export const BorderRadius: ComponentStory<
  typeof BorderRadiusComponent
> = () => <BorderRadiusComponent />;
