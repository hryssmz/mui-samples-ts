// pages/Checkout.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckoutPage from "../../src/pages/Checkout";

export default {
  component: CheckoutPage,
  title: "pages/Checkout",
} as ComponentMeta<typeof CheckoutPage>;

export const Checkout: ComponentStory<typeof CheckoutPage> = () => (
  <CheckoutPage />
);
