// feedback/alert/IconAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconAlertsComponent from "../../../src/feedback/alert/IconAlerts";

export default {
  component: IconAlertsComponent,
  title: "feedback/Alert/Icon Alerts",
} as ComponentMeta<typeof IconAlertsComponent>;

export const IconAlerts: ComponentStory<typeof IconAlertsComponent> = () => (
  <IconAlertsComponent />
);
