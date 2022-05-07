// components/dashboard/Chart.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChartComponent from "../../../src/components/dashboard/Chart";

export default {
  component: ChartComponent,
  title: "components/Dashboard/Chart",
} as ComponentMeta<typeof ChartComponent>;

export const Chart: ComponentStory<typeof ChartComponent> = () => (
  <ChartComponent />
);
