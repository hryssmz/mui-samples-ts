// system/grid/GridTemplateRows.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridTemplateRowsComponent from "../../../src/system/grid/GridTemplateRows";

export default {
  component: GridTemplateRowsComponent,
  title: "system/Grid/Grid Template Rows",
} as ComponentMeta<typeof GridTemplateRowsComponent>;

export const GridTemplateRows: ComponentStory<
  typeof GridTemplateRowsComponent
> = () => <GridTemplateRowsComponent />;
