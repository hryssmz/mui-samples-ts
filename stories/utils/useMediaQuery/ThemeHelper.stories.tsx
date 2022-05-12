// utils/useMediaQuery/ThemeHelper.stories.tunstyled
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ThemeHelperComponent from "../../../src/utils/useMediaQuery/ThemeHelper";

export default {
  component: ThemeHelperComponent,
  title: "utils/useMediaQuery/Theme Helper",
} as ComponentMeta<typeof ThemeHelperComponent>;

export const ThemeHelper: ComponentStory<typeof ThemeHelperComponent> = () => (
  <ThemeHelperComponent />
);
