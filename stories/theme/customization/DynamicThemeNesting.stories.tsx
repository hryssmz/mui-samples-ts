// theme/customization/DynamicThemeNesting.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DynamicThemeNestingComponent from "../../../src/theme/customization/DynamicThemeNesting";

export default {
  component: DynamicThemeNestingComponent,
  title: "theme/Customization/Dynamic Theme Nesting",
} as ComponentMeta<typeof DynamicThemeNestingComponent>;

export const DynamicThemeNesting: ComponentStory<
  typeof DynamicThemeNestingComponent
> = () => <DynamicThemeNestingComponent />;
