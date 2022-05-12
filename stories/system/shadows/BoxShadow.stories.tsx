// system/shadows/BoxShadow.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoxShadowComponent from "../../../src/system/shadows/BoxShadow";

export default {
  component: BoxShadowComponent,
  title: "system/Shadows/Box Shadow",
} as ComponentMeta<typeof BoxShadowComponent>;

export const BoxShadow: ComponentStory<typeof BoxShadowComponent> = () => (
  <BoxShadowComponent />
);
