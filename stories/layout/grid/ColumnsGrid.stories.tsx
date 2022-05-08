// layout/grid/ColumnsGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColumnsGridComponent from "../../../src/layout/grid/ColumnsGrid";

export default {
  component: ColumnsGridComponent,
  title: "layout/Grid/Columns Grid",
} as ComponentMeta<typeof ColumnsGridComponent>;

export const ColumnsGrid: ComponentStory<typeof ColumnsGridComponent> = () => (
  <ColumnsGridComponent />
);
