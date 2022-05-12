// theme/darktheme/DarkThemeWithCustomPalette.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DarkThemeWithCustomPaletteComponent from "../../../src/theme/darktheme/DarkThemeWithCustomPalette";

export default {
  component: DarkThemeWithCustomPaletteComponent,
  title: "theme/Darktheme/Dark Theme With Custom Palette",
} as ComponentMeta<typeof DarkThemeWithCustomPaletteComponent>;

export const DarkThemeWithCustomPalette: ComponentStory<
  typeof DarkThemeWithCustomPaletteComponent
> = () => <DarkThemeWithCustomPaletteComponent />;
