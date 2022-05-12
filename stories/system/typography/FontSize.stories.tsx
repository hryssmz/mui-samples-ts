// system/typography/FontSize.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FontSizeComponent from "../../../src/system/typography/FontSize";

export default {
  component: FontSizeComponent,
  title: "system/Typography/Font Size",
} as ComponentMeta<typeof FontSizeComponent>;

export const FontSize: ComponentStory<typeof FontSizeComponent> = () => (
  <FontSizeComponent />
);
