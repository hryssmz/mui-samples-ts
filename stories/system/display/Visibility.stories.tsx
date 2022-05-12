// system/display/Visibility.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VisibilityComponent from "../../../src/system/display/Visibility";

export default {
  component: VisibilityComponent,
  title: "system/Display/Visibility",
} as ComponentMeta<typeof VisibilityComponent>;

export const Visibility: ComponentStory<typeof VisibilityComponent> = () => (
  <VisibilityComponent />
);
