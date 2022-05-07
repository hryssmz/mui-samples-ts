// components/checkout/Review.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReviewComponent from "../../../src/components/checkout/Review";

export default {
  component: ReviewComponent,
  title: "components/Checkout/Review",
} as ComponentMeta<typeof ReviewComponent>;

export const Review: ComponentStory<typeof ReviewComponent> = () => (
  <ReviewComponent />
);
