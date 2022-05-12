// system/demo/MuiDemo.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DemoComponent from "../../../src/system/demo/Demo";

export default {
  component: DemoComponent,
  title: "system/Demo/Demo",
} as ComponentMeta<typeof DemoComponent>;

export const Demo: ComponentStory<typeof DemoComponent> = () => (
  <DemoComponent />
);
