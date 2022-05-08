// feedback/alert/OutlinedAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OutlinedAlertsComponent from "../../../src/feedback/alert/OutlinedAlerts";

export default {
  component: OutlinedAlertsComponent,
  title: "feedback/Alert/Outlined Alerts",
} as ComponentMeta<typeof OutlinedAlertsComponent>;

export const OutlinedAlerts: ComponentStory<
  typeof OutlinedAlertsComponent
> = () => <OutlinedAlertsComponent />;
