// theme/customization/OverrideCssBaseline.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OverrideCssBaselineComponent from "../../../src/theme/customization/OverrideCssBaseline";

export default {
  component: OverrideCssBaselineComponent,
  title: "theme/Customization/Override Css Baseline",
} as ComponentMeta<typeof OverrideCssBaselineComponent>;

export const OverrideCssBaseline: ComponentStory<
  typeof OverrideCssBaselineComponent
> = () => <OverrideCssBaselineComponent />;
