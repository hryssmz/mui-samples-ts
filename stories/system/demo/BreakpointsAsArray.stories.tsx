// system/demo/BreakpointsAsArray.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BreakpointsAsArrayComponent from "../../../src/system/demo/BreakpointsAsArray";

export default {
  component: BreakpointsAsArrayComponent,
  title: "system/Demo/Breakpoints As Array",
} as ComponentMeta<typeof BreakpointsAsArrayComponent>;

export const BreakpointsAsArray: ComponentStory<
  typeof BreakpointsAsArrayComponent
> = () => <BreakpointsAsArrayComponent />;
