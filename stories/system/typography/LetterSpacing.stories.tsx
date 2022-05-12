// system/typography/LetterSpacing.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LetterSpacingComponent from "../../../src/system/typography/LetterSpacing";

export default {
  component: LetterSpacingComponent,
  title: "system/Typography/Letter Spacing",
} as ComponentMeta<typeof LetterSpacingComponent>;

export const LetterSpacing: ComponentStory<
  typeof LetterSpacingComponent
> = () => <LetterSpacingComponent />;
