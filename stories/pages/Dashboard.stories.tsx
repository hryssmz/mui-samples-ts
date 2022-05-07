// pages/Dashboard.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DashboardPage from "../../src/pages/Dashboard";

export default {
  component: DashboardPage,
  title: "pages/Dashboard",
} as ComponentMeta<typeof DashboardPage>;

export const Dashboard: ComponentStory<typeof DashboardPage> = () => (
  <DashboardPage />
);
