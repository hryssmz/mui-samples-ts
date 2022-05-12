// system/grid/GridTemplateColumns.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridTemplateColumnsComponent from "../../../src/system/grid/GridTemplateColumns";

export default {
  component: GridTemplateColumnsComponent,
  title: "system/Grid/Grid Template Columns",
} as ComponentMeta<typeof GridTemplateColumnsComponent>;

export const GridTemplateColumns: ComponentStory<
  typeof GridTemplateColumnsComponent
> = () => <GridTemplateColumnsComponent />;
