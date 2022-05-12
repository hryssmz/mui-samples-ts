// system/display/Hiding.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HidingComponent from "../../../src/system/display/Hiding";

export default {
  component: HidingComponent,
  title: "system/Display/Hiding",
} as ComponentMeta<typeof HidingComponent>;

export const Hiding: ComponentStory<typeof HidingComponent> = () => (
  <HidingComponent />
);
