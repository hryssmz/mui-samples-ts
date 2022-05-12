// system/grid/RowAndColumnGap.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RowAndColumnGapComponent from "../../../src/system/grid/RowAndColumnGap";

export default {
  component: RowAndColumnGapComponent,
  title: "system/Grid/Row And Column Gap",
} as ComponentMeta<typeof RowAndColumnGapComponent>;

export const RowAndColumnGap: ComponentStory<
  typeof RowAndColumnGapComponent
> = () => <RowAndColumnGapComponent />;
