// system/display/WhiteSpace.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhiteSpaceComponent from "../../../src/system/display/WhiteSpace";

export default {
  component: WhiteSpaceComponent,
  title: "system/Display/White Space",
} as ComponentMeta<typeof WhiteSpaceComponent>;

export const WhiteSpace: ComponentStory<typeof WhiteSpaceComponent> = () => (
  <WhiteSpaceComponent />
);
