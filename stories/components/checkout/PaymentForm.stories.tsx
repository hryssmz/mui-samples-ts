// components/checkout/PaymentForm.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PaymentFormComponent from "../../../src/components/checkout/PaymentForm";

export default {
  component: PaymentFormComponent,
  title: "components/Checkout/Payment Form",
} as ComponentMeta<typeof PaymentFormComponent>;

export const PaymentForm: ComponentStory<typeof PaymentFormComponent> = () => (
  <PaymentFormComponent />
);
