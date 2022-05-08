// feedback/alert/ActionAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ActionAlertsComponent from "../../../src/feedback/alert/ActionAlerts";

export default {
  component: ActionAlertsComponent,
  title: "feedback/Alert/Action Alerts",
} as ComponentMeta<typeof ActionAlertsComponent>;

export const ActionAlerts: ComponentStory<
  typeof ActionAlertsComponent
> = () => <ActionAlertsComponent />;
