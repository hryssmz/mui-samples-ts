// system/spacing/Spacing.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SpacingComponent from "../../../src/system/spacing/Spacing";

export default {
  component: SpacingComponent,
  title: "system/Spacing/Spacing",
} as ComponentMeta<typeof SpacingComponent>;

export const Spacing: ComponentStory<typeof SpacingComponent> = () => (
  <SpacingComponent />
);
