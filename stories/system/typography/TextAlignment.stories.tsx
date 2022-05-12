// system/typography/TextAlignment.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextAlignmentComponent from "../../../src/system/typography/TextAlignment";

export default {
  component: TextAlignmentComponent,
  title: "system/Typography/Text Alignment",
} as ComponentMeta<typeof TextAlignmentComponent>;

export const TextAlignment: ComponentStory<
  typeof TextAlignmentComponent
> = () => <TextAlignmentComponent />;
