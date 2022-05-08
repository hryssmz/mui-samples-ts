// feedback/alert/BasicAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicAlertsComponent from "../../../src/feedback/alert/BasicAlerts";

export default {
  component: BasicAlertsComponent,
  title: "feedback/Alert/Basic Alerts",
} as ComponentMeta<typeof BasicAlertsComponent>;

export const BasicAlerts: ComponentStory<typeof BasicAlertsComponent> = () => (
  <BasicAlertsComponent />
);
