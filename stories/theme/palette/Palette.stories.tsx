// theme/palette/Palette.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PaletteComponent from "../../../src/theme/palette/Palette";

export default {
  component: PaletteComponent,
  title: "theme/Palette/Palette",
} as ComponentMeta<typeof PaletteComponent>;

export const Palette: ComponentStory<typeof PaletteComponent> = () => (
  <PaletteComponent />
);
