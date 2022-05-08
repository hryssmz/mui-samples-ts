// layout/grid/ComplexGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ComplexGridComponent from "../../../src/layout/grid/ComplexGrid";

export default {
  component: ComplexGridComponent,
  title: "layout/Grid/Complex Grid",
} as ComponentMeta<typeof ComplexGridComponent>;

export const ComplexGrid: ComponentStory<typeof ComplexGridComponent> = () => (
  <ComplexGridComponent />
);
