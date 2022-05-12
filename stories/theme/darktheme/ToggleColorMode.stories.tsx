// theme/darktheme/ToggleColorMode.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToggleColorModeComponent from "../../../src/theme/darktheme/ToggleColorMode";

export default {
  component: ToggleColorModeComponent,
  title: "theme/Darktheme/Toggle Color Mode",
} as ComponentMeta<typeof ToggleColorModeComponent>;

export const ToggleColorMode: ComponentStory<
  typeof ToggleColorModeComponent
> = () => <ToggleColorModeComponent />;
