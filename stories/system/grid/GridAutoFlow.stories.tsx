// system/grid/GridAutoFlow.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridAutoFlowComponent from "../../../src/system/grid/GridAutoFlow";

export default {
  component: GridAutoFlowComponent,
  title: "system/Grid/Grid Auto Flow",
} as ComponentMeta<typeof GridAutoFlowComponent>;

export const GridAutoFlow: ComponentStory<
  typeof GridAutoFlowComponent
> = () => <GridAutoFlowComponent />;
