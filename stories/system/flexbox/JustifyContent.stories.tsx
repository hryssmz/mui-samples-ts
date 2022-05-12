// system/flexbox/JustifyContent.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JustifyContentComponent from "../../../src/system/flexbox/JustifyContent";

export default {
  component: JustifyContentComponent,
  title: "system/Flexbox/Justify Content",
} as ComponentMeta<typeof JustifyContentComponent>;

export const JustifyContent: ComponentStory<
  typeof JustifyContentComponent
> = () => <JustifyContentComponent />;
