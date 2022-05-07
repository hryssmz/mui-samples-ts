// components/checkout/AddressForm.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddressFormComponent from "../../../src/components/checkout/AddressForm";

export default {
  component: AddressFormComponent,
  title: "components/Checkout/Address Form",
} as ComponentMeta<typeof AddressFormComponent>;

export const AddressForm: ComponentStory<typeof AddressFormComponent> = () => (
  <AddressFormComponent />
);
