// system/flexbox/Order.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OrderComponent from "../../../src/system/flexbox/Order";

export default {
  component: OrderComponent,
  title: "system/Flexbox/Order",
} as ComponentMeta<typeof OrderComponent>;

export const Order: ComponentStory<typeof OrderComponent> = () => (
  <OrderComponent />
);
