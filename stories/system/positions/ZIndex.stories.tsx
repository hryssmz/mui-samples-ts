// system/positions/ZIndex.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ZIndexComponent from "../../../src/system/positions/ZIndex";

export default {
  component: ZIndexComponent,
  title: "system/Positions/Z Index",
} as ComponentMeta<typeof ZIndexComponent>;

export const ZIndex: ComponentStory<typeof ZIndexComponent> = () => (
  <ZIndexComponent />
);
