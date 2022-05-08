// layout/grid/NestedGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NestedGridComponent from "../../../src/layout/grid/NestedGrid";

export default {
  component: NestedGridComponent,
  title: "layout/Grid/Nested Grid",
} as ComponentMeta<typeof NestedGridComponent>;

export const NestedGrid: ComponentStory<typeof NestedGridComponent> = () => (
  <NestedGridComponent />
);
