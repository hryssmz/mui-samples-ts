// layout/grid/BasicGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicGridComponent from "../../../src/layout/grid/BasicGrid";

export default {
  component: BasicGridComponent,
  title: "layout/Grid/Basic Grid",
} as ComponentMeta<typeof BasicGridComponent>;

export const BasicGrid: ComponentStory<typeof BasicGridComponent> = () => (
  <BasicGridComponent />
);
