// system/typography/FontFamily.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FontFamilyComponent from "../../../src/system/typography/FontFamily";

export default {
  component: FontFamilyComponent,
  title: "system/Typography/Font Family",
} as ComponentMeta<typeof FontFamilyComponent>;

export const FontFamily: ComponentStory<typeof FontFamilyComponent> = () => (
  <FontFamilyComponent />
);
