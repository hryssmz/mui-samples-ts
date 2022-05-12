// system/grid/GridTemplateAreas.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridTemplateAreasComponent from "../../../src/system/grid/GridTemplateAreas";

export default {
  component: GridTemplateAreasComponent,
  title: "system/Grid/Grid Template Areas",
} as ComponentMeta<typeof GridTemplateAreasComponent>;

export const GridTemplateAreas: ComponentStory<
  typeof GridTemplateAreasComponent
> = () => <GridTemplateAreasComponent />;
