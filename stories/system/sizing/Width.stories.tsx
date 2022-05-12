// system/sizing/Width.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WidthComponent from "../../../src/system/sizing/Width";

export default {
  component: WidthComponent,
  title: "system/Sizing/Width",
} as ComponentMeta<typeof WidthComponent>;

export const Width: ComponentStory<typeof WidthComponent> = () => (
  <WidthComponent />
);
