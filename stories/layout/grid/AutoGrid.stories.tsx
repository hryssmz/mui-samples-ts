// layout/grid/AutoGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AutoGridComponent from "../../../src/layout/grid/AutoGrid";

export default {
  component: AutoGridComponent,
  title: "layout/Grid/Auto Grid",
} as ComponentMeta<typeof AutoGridComponent>;

export const AutoGrid: ComponentStory<typeof AutoGridComponent> = () => (
  <AutoGridComponent />
);
