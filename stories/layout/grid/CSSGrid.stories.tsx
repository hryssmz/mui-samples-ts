// layout/grid/CSSGrid.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CSSGridComponent from "../../../src/layout/grid/CSSGrid";

export default {
  component: CSSGridComponent,
  title: "layout/Grid/CSS Grid",
} as ComponentMeta<typeof CSSGridComponent>;

export const CSSGrid: ComponentStory<typeof CSSGridComponent> = () => (
  <CSSGridComponent />
);
