// feedback/alert/FilledAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FilledAlertsComponent from "../../../src/feedback/alert/FilledAlerts";

export default {
  component: FilledAlertsComponent,
  title: "feedback/Alert/Filled Alerts",
} as ComponentMeta<typeof FilledAlertsComponent>;

export const FilledAlerts: ComponentStory<
  typeof FilledAlertsComponent
> = () => <FilledAlertsComponent />;
