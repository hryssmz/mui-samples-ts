// system/borders/BorderColor.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BorderColorComponent from "../../../src/system/borders/BorderColor";

export default {
  component: BorderColorComponent,
  title: "system/Borders/Border Color",
} as ComponentMeta<typeof BorderColorComponent>;

export const BorderColor: ComponentStory<typeof BorderColorComponent> = () => (
  <BorderColorComponent />
);
