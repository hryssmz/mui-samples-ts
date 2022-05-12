// theme/customization/DynamicCSSVariables.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DynamicCSSVariablesComponent from "../../../src/theme/customization/DynamicCSSVariables";

export default {
  component: DynamicCSSVariablesComponent,
  title: "theme/Customization/Dynamic CSS Variables",
} as ComponentMeta<typeof DynamicCSSVariablesComponent>;

export const DynamicCSSVariables: ComponentStory<
  typeof DynamicCSSVariablesComponent
> = () => <DynamicCSSVariablesComponent />;
