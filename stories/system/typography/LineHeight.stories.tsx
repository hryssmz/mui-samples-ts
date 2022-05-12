// system/typography/LineHeight.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LineHeightComponent from "../../../src/system/typography/LineHeight";

export default {
  component: LineHeightComponent,
  title: "system/Typography/Line Height",
} as ComponentMeta<typeof LineHeightComponent>;

export const LineHeight: ComponentStory<typeof LineHeightComponent> = () => (
  <LineHeightComponent />
);
