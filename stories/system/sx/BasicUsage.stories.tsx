// system/sx/BasicUsage.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicUsageComponent from "../../../src/system/sx/BasicUsage";

export default {
  component: BasicUsageComponent,
  title: "system/Sx/Basic Usage",
} as ComponentMeta<typeof BasicUsageComponent>;

export const BasicUsage: ComponentStory<typeof BasicUsageComponent> = () => (
  <BasicUsageComponent />
);
