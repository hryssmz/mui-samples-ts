// system/display/Print.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrintComponent from "../../../src/system/display/Print";

export default {
  component: PrintComponent,
  title: "system/Display/Print",
} as ComponentMeta<typeof PrintComponent>;

export const Print: ComponentStory<typeof PrintComponent> = () => (
  <PrintComponent />
);
