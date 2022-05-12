// system/styled/ThemeUsage.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ThemeUsageComponent from "../../../src/system/styled/ThemeUsage";

export default {
  component: ThemeUsageComponent,
  title: "system/Styled/Theme Usage",
} as ComponentMeta<typeof ThemeUsageComponent>;

export const ThemeUsage: ComponentStory<typeof ThemeUsageComponent> = () => (
  <ThemeUsageComponent />
);
