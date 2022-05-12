// theme/customization/GlobalCssOverride.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GlobalCssOverrideComponent from "../../../src/theme/customization/GlobalCssOverride";

export default {
  component: GlobalCssOverrideComponent,
  title: "theme/Customization/Global Css Override",
} as ComponentMeta<typeof GlobalCssOverrideComponent>;

export const GlobalCssOverride: ComponentStory<
  typeof GlobalCssOverrideComponent
> = () => <GlobalCssOverrideComponent />;
