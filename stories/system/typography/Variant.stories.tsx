// system/typography/Variant.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VariantComponent from "../../../src/system/typography/Variant";

export default {
  component: VariantComponent,
  title: "system/Typography/Variant",
} as ComponentMeta<typeof VariantComponent>;

export const Variant: ComponentStory<typeof VariantComponent> = () => (
  <VariantComponent />
);
