// theme/components/GlobalThemeOverride.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GlobalThemeOverrideComponent from "../../../src/theme/components/GlobalThemeOverride";

export default {
  component: GlobalThemeOverrideComponent,
  title: "theme/Components/Global Theme Override",
} as ComponentMeta<typeof GlobalThemeOverrideComponent>;

export const GlobalThemeOverride: ComponentStory<
  typeof GlobalThemeOverrideComponent
> = () => <GlobalThemeOverrideComponent />;
