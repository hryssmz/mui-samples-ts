// feedback/alert/DescriptionAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DescriptionAlertsComponent from "../../../src/feedback/alert/DescriptionAlerts";

export default {
  component: DescriptionAlertsComponent,
  title: "feedback/Alert/Description Alerts",
} as ComponentMeta<typeof DescriptionAlertsComponent>;

export const DescriptionAlerts: ComponentStory<
  typeof DescriptionAlertsComponent
> = () => <DescriptionAlertsComponent />;
