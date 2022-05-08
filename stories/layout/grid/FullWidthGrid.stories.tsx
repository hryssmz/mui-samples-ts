// layout/grid/FullWidthGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullWidthGridComponent from "../../../src/layout/grid/FullWidthGrid";

export default {
  component: FullWidthGridComponent,
  title: "layout/Grid/Full Width Grid",
} as ComponentMeta<typeof FullWidthGridComponent>;

export const FullWidthGrid: ComponentStory<
  typeof FullWidthGridComponent
> = () => <FullWidthGridComponent />;
