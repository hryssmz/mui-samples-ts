// system/grid/GridAutoRows.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridAutoRowsComponent from "../../../src/system/grid/GridAutoRows";

export default {
  component: GridAutoRowsComponent,
  title: "system/Grid/Grid Auto Rows",
} as ComponentMeta<typeof GridAutoRowsComponent>;

export const GridAutoRows: ComponentStory<
  typeof GridAutoRowsComponent
> = () => <GridAutoRowsComponent />;
