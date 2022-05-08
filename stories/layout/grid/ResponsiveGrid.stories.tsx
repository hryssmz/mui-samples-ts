// layout/grid/ResponsiveGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ResponsiveGridComponent from "../../../src/layout/grid/ResponsiveGrid";

export default {
  component: ResponsiveGridComponent,
  title: "layout/Grid/Responsive Grid",
} as ComponentMeta<typeof ResponsiveGridComponent>;

export const ResponsiveGrid: ComponentStory<
  typeof ResponsiveGridComponent
> = () => <ResponsiveGridComponent />;
