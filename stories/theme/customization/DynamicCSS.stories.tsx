// theme/customization/DynamicCSS.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DynamicCSSComponent from "../../../src/theme/customization/DynamicCSS";

export default {
  component: DynamicCSSComponent,
  title: "theme/Customization/Dynamic CSS",
} as ComponentMeta<typeof DynamicCSSComponent>;

export const DynamicCSS: ComponentStory<typeof DynamicCSSComponent> = () => (
  <DynamicCSSComponent />
);
