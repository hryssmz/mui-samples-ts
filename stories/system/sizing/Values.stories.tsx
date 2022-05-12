// system/sizing/Values.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ValuesComponent from "../../../src/system/sizing/Values";

export default {
  component: ValuesComponent,
  title: "system/Sizing/Values",
} as ComponentMeta<typeof ValuesComponent>;

export const Values: ComponentStory<typeof ValuesComponent> = () => (
  <ValuesComponent />
);
