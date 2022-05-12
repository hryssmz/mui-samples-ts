// system/display/TextOverflow.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextOverflowComponent from "../../../src/system/display/TextOverflow";

export default {
  component: TextOverflowComponent,
  title: "system/Display/Text Overflow",
} as ComponentMeta<typeof TextOverflowComponent>;

export const TextOverflow: ComponentStory<
  typeof TextOverflowComponent
> = () => <TextOverflowComponent />;
