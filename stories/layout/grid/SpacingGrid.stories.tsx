// layout/grid/SpacingGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SpacingGridComponent from "../../../src/layout/grid/SpacingGrid";

export default {
  component: SpacingGridComponent,
  title: "layout/Grid/Spacing Grid",
} as ComponentMeta<typeof SpacingGridComponent>;

export const SpacingGrid: ComponentStory<typeof SpacingGridComponent> = () => (
  <SpacingGridComponent />
);
