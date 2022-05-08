// layout/grid/VariableWidthGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VariableWidthGridComponent from "../../../src/layout/grid/VariableWidthGrid";

export default {
  component: VariableWidthGridComponent,
  title: "layout/Grid/Variable Width Grid",
} as ComponentMeta<typeof VariableWidthGridComponent>;

export const VariableWidthGrid: ComponentStory<
  typeof VariableWidthGridComponent
> = () => <VariableWidthGridComponent />;
