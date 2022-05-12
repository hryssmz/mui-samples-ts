// system/typography/FontStyle.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FontStyleComponent from "../../../src/system/typography/FontStyle";

export default {
  component: FontStyleComponent,
  title: "system/Typography/Font Style",
} as ComponentMeta<typeof FontStyleComponent>;

export const FontStyle: ComponentStory<typeof FontStyleComponent> = () => (
  <FontStyleComponent />
);
