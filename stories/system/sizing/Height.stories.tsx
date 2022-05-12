// system/sizing/Height.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeightComponent from "../../../src/system/sizing/Height";

export default {
  component: HeightComponent,
  title: "system/Sizing/Height",
} as ComponentMeta<typeof HeightComponent>;

export const Height: ComponentStory<typeof HeightComponent> = () => (
  <HeightComponent />
);
