// feedback/alert/ColorAlerts.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorAlertsComponent from "../../../src/feedback/alert/ColorAlerts";

export default {
  component: ColorAlertsComponent,
  title: "feedback/Alert/Color Alerts",
} as ComponentMeta<typeof ColorAlertsComponent>;

export const ColorAlerts: ComponentStory<typeof ColorAlertsComponent> = () => (
  <ColorAlertsComponent />
);
