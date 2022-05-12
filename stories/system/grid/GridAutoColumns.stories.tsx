// system/grid/GridAutoColumns.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridAutoColumnsComponent from "../../../src/system/grid/GridAutoColumns";

export default {
  component: GridAutoColumnsComponent,
  title: "system/Grid/Grid Auto Columns",
} as ComponentMeta<typeof GridAutoColumnsComponent>;

export const GridAutoColumns: ComponentStory<
  typeof GridAutoColumnsComponent
> = () => <GridAutoColumnsComponent />;
