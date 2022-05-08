// layout/grid/AutoGridNoWrap.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AutoGridNoWrapComponent from "../../../src/layout/grid/AutoGridNoWrap";

export default {
  component: AutoGridNoWrapComponent,
  title: "layout/Grid/Auto Grid No Wrap",
} as ComponentMeta<typeof AutoGridNoWrapComponent>;

export const AutoGridNoWrap: ComponentStory<
  typeof AutoGridNoWrapComponent
> = () => <AutoGridNoWrapComponent />;
