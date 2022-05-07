// components/dashboard/Deposits.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DepositsComponent from "../../../src/components/dashboard/Deposits";

export default {
  component: DepositsComponent,
  title: "components/Dashboard/Deposits",
} as ComponentMeta<typeof DepositsComponent>;

export const Deposits: ComponentStory<typeof DepositsComponent> = () => (
  <DepositsComponent />
);
