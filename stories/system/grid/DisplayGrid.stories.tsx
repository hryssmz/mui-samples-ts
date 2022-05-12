// system/grid/DisplayGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DisplayGridComponent from "../../../src/system/grid/DisplayGrid";

export default {
  component: DisplayGridComponent,
  title: "system/Grid/Display Grid",
} as ComponentMeta<typeof DisplayGridComponent>;

export const DisplayGrid: ComponentStory<typeof DisplayGridComponent> = () => (
  <DisplayGridComponent />
);
