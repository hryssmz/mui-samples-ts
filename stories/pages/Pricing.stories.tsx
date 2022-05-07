// pages/Pricing.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PricingPage from "../../src/pages/Pricing";

export default {
  component: PricingPage,
  title: "pages/Pricing",
} as ComponentMeta<typeof PricingPage>;

export const Pricing: ComponentStory<typeof PricingPage> = () => (
  <PricingPage />
);
