// system/screenreaders/VisuallyHiddenUsage.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VisuallyHiddenUsageComponent from "../../../src/system/screenreaders/VisuallyHiddenUsage";

export default {
  component: VisuallyHiddenUsageComponent,
  title: "system/Screenreaders/Visually Hidden Usage",
} as ComponentMeta<typeof VisuallyHiddenUsageComponent>;

export const VisuallyHiddenUsage: ComponentStory<
  typeof VisuallyHiddenUsageComponent
> = () => <VisuallyHiddenUsageComponent />;
