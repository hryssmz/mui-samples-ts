// system/typography/FontWeight.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FontWeightComponent from "../../../src/system/typography/FontWeight";

export default {
  component: FontWeightComponent,
  title: "system/Typography/Font Weight",
} as ComponentMeta<typeof FontWeightComponent>;

export const FontWeight: ComponentStory<typeof FontWeightComponent> = () => (
  <FontWeightComponent />
);
