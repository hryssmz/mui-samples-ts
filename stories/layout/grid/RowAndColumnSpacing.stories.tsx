// layout/grid/RowAndColumnSpacing.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RowAndColumnSpacingComponent from "../../../src/layout/grid/RowAndColumnSpacing";

export default {
  component: RowAndColumnSpacingComponent,
  title: "layout/Grid/Row And Column Spacing",
} as ComponentMeta<typeof RowAndColumnSpacingComponent>;

export const RowAndColumnSpacing: ComponentStory<
  typeof RowAndColumnSpacingComponent
> = () => <RowAndColumnSpacingComponent />;
