// components/dashboard/Orders.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OrdersComponent from "../../../src/components/dashboard/Orders";

export default {
  component: OrdersComponent,
  title: "components/Dashboard/Orders",
} as ComponentMeta<typeof OrdersComponent>;

export const Orders: ComponentStory<typeof OrdersComponent> = () => (
  <OrdersComponent />
);
